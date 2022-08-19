import { Logo } from "./Logo";
import { Container } from "./styledComponents";
import styled from "styled-components";
import { SelectLanguages } from './SelectLanguages';

const StyledHeader = styled.header`
  flex: 0 1 auto;
  background-color: aliceblue;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 20px;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo color="black" />
        <SelectLanguages/>
      </HeaderContainer>
    </StyledHeader>
  );
}
export default Header;
