import debounce from "lodash.debounce";
import { Button } from "../components/Button";
import { InputText } from "../components/Input";
import withLeftSidebar from "../hocs/withLeftSidebar";
import { useDispatch, useSelector } from "react-redux";
import { setSeachValueAction, setImagesAction } from "../redux/actions";
import { searchValueSelector, getImagesSelector } from '../redux/selectors';

const API_KEY = "563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2";
const BASE_URL = "https://api.pexels.com/v1/";
const endpoint = "search";
const options = {
  headers: {
    Authorization: API_KEY,
  },
};

function WhatWeDo() {
  const dispatch = useDispatch();
  const search = useSelector(searchValueSelector);
  const images = useSelector(getImagesSelector);

  const handleInputChange = debounce((e) => {
    dispatch(setSeachValueAction(e.target.value))
  }, 1000);

  const searchValue = () => {
    if (search) {
      let params = `?query=${search}&orientaion=portrait&size=small&per_page=5`;
      const url = BASE_URL + endpoint + params;
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => dispatch(setImagesAction(data.photos)))
    }
  };

  return (
    <>
      <section style={{padding: '100px'}}>
        <h1>{search || "SEARCH"}</h1>
        <InputText
          placeholder="enter value"
          handleChange={handleInputChange}
        />
        <Button type="submit" label="search" handleClick={searchValue} />
        <ul>
          {images.map(({ src: { tiny }, alt, id }) => {
            return (
              <li key={id}>
                <img src={tiny} alt={alt} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default withLeftSidebar(WhatWeDo);
