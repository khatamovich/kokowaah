import StyledNavigation from "./Navigation.styled";
import { Link, useLocation } from "react-router-dom";

const links = [
   {
      id: 1,
      name: "Главная",
      href: "/",
   },
   {
      id: 2,
      name: "Все туры",
      href: "/tours",
   },
];

const Navigation = () => {
   const location = useLocation();

   return (
      <StyledNavigation>
         {links?.map((link, i) => (
            <Link
               className={`link ${
                  location.pathname === link.href ? "active" : ""
               }`}
               key={i}
               to={link.href}
            >
               {link.name}
            </Link>
         ))}
      </StyledNavigation>
   );
};

export default Navigation;
