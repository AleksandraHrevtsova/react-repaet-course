import Header from './components/Header';
import Footer from './components/Footer';
import { Button, Link, IconButton } from './components/Button';
import { Icon } from './components/Icon';
import styled from 'styled-components';

const navLinks = [
  {id: '1', label: 'Our work'},
  {id: '2', label: 'About us'},
  {id: '3', label: 'What we do'},
  {id: '4', label: 'Get in touch'}
];

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
    <div className="App">
      <Header x={navLinks}/>
      <Icon iconId='search'/>

      <ButtonsWrapper>
        <Button label='see all works' handleClick={handleButtonClick}/>
        <Link label='get in touch' handleClick={handleLinkButtonClick}/>
        <IconButton iconId='close' label='close'/>
      </ButtonsWrapper>

      <Footer/>
    </div>
  );
}

export default App;
