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
  // ===== STATE
  const [currentState, setCurrentState] = useState('start');
  const [userName, setUserName] = useState('Sandra');
  const [isOnline, setIsOnline] = useState(true);

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

  // ====== EFFECTS

  // ====== METHODS
  const updateState = () => {
    // console.log('Click');
    setCurrentState('stop')
  }

  const toggleStatusIsOnline = () => {
    setIsOnline(!isOnline);
  }

  // ====== METHODS

  return (
    <PageWrapper>
      <Header x={navLinks}/>
      <main style={{flex: '1 0 auto'}}>
        {/* <Button label='click' handleClick={toggleStatusIsOnline}/> */}
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/what-we-do' element={<WhatWeDo/>}/>
          <Route path='/our-work' element={<OurWork/>}/>
          <Route path='/get-in-touch' element={<GetInTouch/>}/>
        </Routes>
      </main>
      <Footer/>
    </PageWrapper>
  );
}

export default App;
