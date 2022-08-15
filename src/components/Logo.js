import logo_white from "../images/logo-white.png";
import logo_black from "../images/logo-black.png";
import { Link } from "react-router-dom";

export const Logo = ({ color }) => {
  return (
    <Link to="/">
      <div>
        <img src={color === "white" ? logo_white : logo_black} alt="logo" />
      </div>
    </Link>
  );
};
