import { useState, useEffect, useRef } from "react";
import debounce from "lodash.debounce";
import { Button } from "../components/Button";
import { InputText } from "../components/Input";
import withLeftSidebar from "../hocs/withLeftSidebar";
import { useDispatch, useSelector } from "react-redux";
import { setSeachValueAction, setPageValueAction, setImagesAction, addImagesAction } from "../redux/actions";
import { searchValueSelector, pageValueSelector, getImagesSelector } from '../redux/selectors';
import styled from "styled-components";

const StyledImagesList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  min-width: 300px;
  width: 100%;
`;

const StyledSearch = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  input {
    margin-right: 10px;
  }
`;

const StyledImageItem = styled.li`
  margin-left: 40px;
  margin-bottom: 10px;
  position: relative;
  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 20px;
    left: -30px;
    width: 20px;
    height: 20px;
    border-radius: 59%;
    background-color: ${({color}) => color };
  }
`;

const StyledButtonsList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  li {
    margin: 6px;
  }
`;

const StyledAuthorButton = styled.button`
  padding: 4px 6px;
  border-radius: 4px;
  border: 2px solid;
`;

const API_KEY = "563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2";
const BASE_URL = "https://api.pexels.com/v1/";
const endpoint = "search";
const options = {
  headers: {
    Authorization: API_KEY,
  },
};

function WhatWeDo() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const search = useSelector(searchValueSelector);
  const page = useSelector(pageValueSelector);
  const imagesFromStorage = useSelector(getImagesSelector);
  const [authors, setAuthors] = useState({});
  const [imagesForRender, setImagesFroRender] = useState(imagesFromStorage || []);
  const [choosedAuthor, setChoosedAuthor] = useState('all');

  useEffect(() => {
    if(choosedAuthor === 'all') {
      setImagesFroRender(imagesFromStorage);
    } else {
      const filteredImages = imagesFromStorage.filter(image => {
        return image.photographer === choosedAuthor;
      })
      console.log('filteredImages:', filteredImages);
      setImagesFroRender(filteredImages);
    }
  }, [choosedAuthor, imagesFromStorage]);

  useEffect(() => {
    // console.log('imagesFromStorage:', imagesFromStorage);
    const authors = imagesFromStorage.map(image => image.photographer)
    // console.log('authors:', authors);
    const sortedAuthors = authors.reduce((memo, author) => {
      !memo.hasOwnProperty(author) ? memo[author] = 1 : memo[author] += 1;
      return memo;
    }, {})
    // console.log('sortedAuthors:', sortedAuthors);
    setAuthors(sortedAuthors);
  },[imagesFromStorage]);

  const handleInputChange = debounce((e) => {
    dispatch(setSeachValueAction(e.target.value))
  }, 1000);

  const searchValue = () => {
    console.log('inputRef:', inputRef.current.value);
    getFetch(setImagesAction)
    inputRef.current.value = ''
  };

  const loadMoreImages = () => {
    getFetch(addImagesAction, page)
  }

  const getFetch = (imagesAction, page = 0) => {
    if (!search) return;
    setChoosedAuthor('all');
    let currentPage = page + 1
    let params = `?query=${search}&orientaion=portrait&size=small&per_page=5&page=${currentPage}`;
    const url = BASE_URL + endpoint + params;
    fetch(url, options)
      .then(r => r.json())
      .then(data => {
        dispatch(imagesAction(data.photos));
        dispatch(setPageValueAction(currentPage));
      })
  }

  const chooseAuthor = (e) => {
    console.log('chooseAuthor:', e.target.dataset.value);
    setChoosedAuthor(e.target.dataset.value)
  }

  const isSelectedAuthor = () => {
    // 
  }

  return (
    <>
      <section style={{paddingLeft: '100px'}}>
        <h1>{search || "SEARCH"}</h1>
          <StyledSearch>
            <InputText
              inputRef={inputRef}
              placeholder="enter value"
              handleChange={handleInputChange}
              />
            <Button type="submit" label="search" handleClick={searchValue} />
          </StyledSearch>
          <div>
            <h3>Photographers</h3>
            <StyledButtonsList>
              <li key='all'>
                <StyledAuthorButton 
                  type='button'
                  onClick={chooseAuthor}
                  data-value='all'
                  // SELECTED AUTHOR
                >
                  All
                </StyledAuthorButton>
              </li>
              {Object.keys(authors).map((authorName) => {
                return <li key={authorName}>
                  <StyledAuthorButton 
                    type='button'
                    onClick={chooseAuthor}
                    data-value={authorName}
                  >
                    {authorName}
                  </StyledAuthorButton>
                </li>
              })}
            </StyledButtonsList>
          </div>
        <StyledImagesList>
          {imagesForRender?.map(({ src: { tiny }, alt, id, avg_color }) => {
            return (
              <StyledImageItem key={id} color={avg_color}>
                <img src={tiny} alt={alt} />
              </StyledImageItem>
            );
          })}
        </StyledImagesList>
        <Button type='button' label='load more' handleClick={loadMoreImages}/> 
      </section>
    </>
  );
}

export default withLeftSidebar(WhatWeDo);
