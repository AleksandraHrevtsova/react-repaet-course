import { useEffect, useRef } from "react";
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
  const images = useSelector(getImagesSelector);

  useEffect(() => {
    // console.log('IMAGES:', images);
  },[images]);

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
        <StyledImagesList>
          {images?.map(({ src: { tiny }, alt, id }) => {
            return (
              <li key={id}>
                <img src={tiny} alt={alt} />
              </li>
            );
          })}
        </StyledImagesList>
        <Button type='button' label='load more' handleClick={loadMoreImages}/> 
      </section>
    </>
  );
}

export default withLeftSidebar(WhatWeDo);
