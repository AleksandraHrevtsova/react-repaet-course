import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledUserGreet = styled.div`
  margin-right: 30px;
  color: pink;
  font-weight: 500;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin-right: ${({styles}) => styles.itemMarginRight};
  color: ${({colors}) => colors.black};
  :hover{
    color: ${({colors}) => colors.hoverLinkColor};
  }
`;

function Navigation () {

  const {navLinks, user} = useContext(AppContext);
  const {colors, styles} = useContext(ThemeContext);

  const handleItemClick = () => {
    // console.log('Item click');
  }

  const handleLinkClick = (e) => {
    // console.log('link to:', e.target);
  }

  const handleLinkMouseEnter = (e)=>{
    // console.log(e);
    // console.log('ENTER');
  }

  return (
    <StyledNav>
      <StyledUserGreet>
        Hello, {user?.name}
      </StyledUserGreet>
      <List>
        {navLinks?.map(({id, label, path}) => (
          <Item key={id} onClick={handleItemClick} styles={styles} colors={colors}>
            <Link 
              to={`/${path}`}
              onClick={handleLinkClick} 
              onMouseEnter={handleLinkMouseEnter}
            >{label}</Link>
          </Item>)
        )}
      </List>
    </StyledNav>
  )
}

export default Navigation;