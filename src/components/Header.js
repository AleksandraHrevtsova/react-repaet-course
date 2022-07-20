import {Logo} from './Logo';
import Navigation from './Navigation';


function Header({x}) {
  return (
    <header>
      <Logo color='black'/>
      <Navigation links={x}/>
    </header>
  )
}
export default Header;