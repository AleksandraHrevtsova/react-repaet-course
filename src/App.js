import Header from './components/Header';
import Footer from './components/Footer';
import { Button, Link, IconButton } from './components/Button';
import { Icon } from './components/Icon';
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

const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

function App() {
  const handleButtonClick = () => {
    console.log('click on BUTTON');
  }
  const handleLinkButtonClick = () => {
    console.log('click on LINK');
  }
  return (
    <PageWrapper>
      <Header x={navLinks}/>
      <main style={{flex: '1 0 auto'}}>
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
      // <Icon iconId='search'/>
      // <ButtonsWrapper>
      //   <Button label='see all works' handleClick={handleButtonClick}/>
      //   <Link label='get in touch' handleClick={handleLinkButtonClick}/>
      //   <IconButton iconId='close' label='close'/>
      // </ButtonsWrapper>
  );
}

export default App;
