import styled from 'styled-components';
import { Logo } from './Logo';

const StyledFooter = styled.footer`
  background-color: #6D6B67;
`;

function Footer(){
  return (
    <StyledFooter>
      <Logo/>
    </StyledFooter>
  )
}

export default Footer;