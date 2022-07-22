import styled from 'styled-components';

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
    e.preventDefault();
    console.log(e);
    console.log('CLICK');
  }

  const handleLinkMouseEnter = (e)=>{
    console.log(e);
    console.log('ENTER');
  }

  return (
    <nav>
      <List>
        {links?.map(({id, label}) => (
          <Item key={id} onClick={handleItemClick}>
            <a 
            href='/' 
            onClick={handleLinkClick} 
            onMouseEnter={handleLinkMouseEnter}
            >{label}</a>
          </Item>)
        )}
      </List>
    </nav>
  )
}

export default Navigation;