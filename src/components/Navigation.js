import styled from 'styled-components';

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin-right: 30px;
`;

function Navigation ({links}) {
  return (
    <nav>
      <List>
        {links?.map(({id, label}) => (
          <Item key={id}>
            <a href='/'>{label}</a>
          </Item>)
        )}
      </List>
    </nav>
  )
}

export default Navigation;