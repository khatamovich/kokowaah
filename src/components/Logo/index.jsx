import StyledLogo, { Slogan } from "./Logo.styled";
import { Link } from "react-router-dom";

const Logo = () => {
   return (
      <Link to="/" className="logo">
         <StyledLogo>
            <span className="title">Kokowaah</span>
            <Slogan>Туристические услуги</Slogan>
         </StyledLogo>
      </Link>
   );
};

export default Logo;
