import logo_white from '../images/logo-white.png';
import logo_black from '../images/logo-black.png';

export const Logo = ({color}) => 
   <img src={color === 'white' ? logo_white : logo_black} alt='logo'/>


