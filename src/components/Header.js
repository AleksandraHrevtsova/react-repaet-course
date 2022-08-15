import { Logo } from "./Logo";
import { Container } from "./styledComponents";
import styled from "styled-components";

const StyledHeader = styled.header`
  flex: 0 1 auto;
  background-color: aliceblue;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 20px;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo color="black" />
        <select onChange={(e) => {
          console.log('e:', e.target)
          console.dir(e.target)
          console.log('VALUE:', e.target.value)
          localStorage.setItem('lang', e.target.value)
        }}>
          <option value='en'>English</option>
          <option value='uk'>Українська</option>
          <option value='ru'>Русский</option>
        </select>
      </HeaderContainer>
    </StyledHeader>
  );
}
export default Header;
