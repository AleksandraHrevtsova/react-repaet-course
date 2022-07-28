import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin-right: 30px;
`;

function Navigation ({links}) {

  const handleItemClick = () => {
    console.log('Item click');
  }

  const handleLinkClick = (e) => {
    // console.log('link to:', e.target);
  }

  const handleLinkMouseEnter = (e)=>{
    // console.log(e);
    // console.log('ENTER');
  }

  return (
    <nav>
      <List>
        {links?.map(({id, label, path}) => (
          <Item key={id} onClick={handleItemClick}>
            <Link 
              to={`/${path}`}
              onClick={handleLinkClick} 
              onMouseEnter={handleLinkMouseEnter}
            >{label}</Link>
          </Item>)
        )}
      </List>
    </nav>
  )
}

export default Navigation;