import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { WhatWeDo } from './pages/What_we_do';
import { AboutUs } from './pages/About_us';
import { GetInTouch } from './pages/Get-in_touch';
import { OurWork } from './pages/Our_work';
import { Button } from './components/Button'

const navLinks = [
  {id: '1', label: 'Our work', path: 'our-work'},
  {id: '2', label: 'About us', path: 'about-us'},
  {id: '3', label: 'What we do', path: 'what-we-do'},
  {id: '4', label: 'Get in touch', path: 'get-in-touch'}
];

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column;
`;

function App() {
  // ===== CONSTANTS
  const API_KEY = '563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2';
  const BASE_URL = 'https://api.pexels.com/v1/';
  const endpoint = 'search';
  const options = {
    // method: 'GET', // POST | PUT | PATCH | DELETE
    headers: {
      Authorization: API_KEY
    },
    // body: {}; // if POST | PUT | PATCH
  }
  // fetch(url, options).then(() => {}).then(() => {})
  // ===== CONSTANTS

  // ===== STATE
  const [currentState, setCurrentState] = useState('start');
  const [userName, setUserName] = useState('Sandra');
  const [isOnline, setIsOnline] = useState(true);
  const [search, setSearch] = useState(null);
  const [kittens, setKittens] = useState([]);
  // ===== STATE

  // ===== EFFECTS
  useEffect(() => {
    // console.log('Use Effect INITIAL LOAD');
  }, []); // first-render

  useEffect(() => {
    // console.log('currentState:', currentState);
  }, [currentState]);

  useEffect(() => {
    // console.log('IsOnline:', isOnline);
  }, [isOnline]);

  useEffect(() => {
    // console.log('search:', search);
  }, [search]);

  useEffect(() => {
    console.log('KITTENS:', kittens);
  }, [kittens]);
  // ====== EFFECTS

  // ====== METHODS
  const updateState = () => {
    // console.log('Click');
    setCurrentState('stop')
  }

  const toggleStatusIsOnline = () => {
    setIsOnline(!isOnline);
  }

  const searchValue = () => {
    if(search){
      // console.log('SEARCH');
      let params = `?query=${search}&orientaion=portrait&size=small&per_page=5`;
      const url = BASE_URL + endpoint + params;
      // console.log('url:', url);
      fetch(url, options).then((response) => {
        console.log('serponse:', response);
        return response.json();
      }).then((data) => {
        console.log('data:', data);
        return data.photos
      }).then((kittens) => {
        setKittens(kittens); // rewrite
        // setKittents((prev)=>{ return [...prev, ...kittens] }) // add new kittens 
      })
    }
  }

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }
  // ====== METHODS

  return (
    <PageWrapper>
      <Header x={navLinks}/>
      <main style={{flex: '1 0 auto'}}>
        <section>
          <input placeholder='enter value' onChange={handleInputChange}/>
          <Button type='submit' label='search' handleClick={searchValue}/>
        </section>
        {/* <Button label='click' handleClick={toggleStatusIsOnline}/> */}
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/what-we-do' element={<WhatWeDo/>}/>
          <Route path='/our-work' element={<OurWork kittens={kittens}/>}/>
          <Route path='/get-in-touch' element={<GetInTouch/>}/>
        </Routes>
      </main>
      <Footer/>
    </PageWrapper>
  );
}

export default App;
