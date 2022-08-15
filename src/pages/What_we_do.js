import { useState } from "react";
import { Button } from "../components/Button";
import { InputText } from "../components/Input";
import withLeftSidebar from "../hocs/withLeftSidebar";

const API_KEY = "563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2";
const BASE_URL = "https://api.pexels.com/v1/";
const endpoint = "search";
const options = {
  // method: 'GET', // POST | PUT | PATCH | DELETE
  headers: {
    Authorization: API_KEY,
  },
  // body: {}; // if POST | PUT | PATCH
};
// fetch(url, options).then(() => {}).then(() => {})

function WhatWeDo() {
  const [search, setSearch] = useState(null);
  const [kittens, setKittens] = useState([]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const searchValue = () => {
    console.log("search:", search);
    console.log("data before request:", kittens);
    if (search) {
      let params = `?query=${search}&orientaion=portrait&size=small&per_page=5`;
      const url = BASE_URL + endpoint + params;
      fetch(url, options)
        .then((response) => {
          console.log("serponse:", response);
          return response.json();
        })
        .then((data) => {
          console.log("data:", data);
          return data.photos;
        })
        .then((kittens) => {
          setKittens(kittens); // rewrite
        });
      console.log("data AFTER request:", kittens);
    }
    console.log("data after request:", kittens);
  };

  return (
    <>
      <section>
        <h1>{search || "SEARCH"}</h1>
        <InputText
          placeholder="enter value"
          handleChange={handleInputChange}
          xxx="111"
        />
        <Button type="submit" label="search" handleClick={searchValue} />
        <ul>
          {kittens.map(({ src: { tiny }, alt, id }) => {
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
