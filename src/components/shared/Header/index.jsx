import StyledHeader, { Content } from "./Header.styled";
import Logo from "../../Logo";
import Navigation from "../../Navigation";
import QuickCall from "../../QuickCall";
import Container from "../Container";

const Header = ({ ...props }) => {
   return (
      <StyledHeader {...props}>
         <Container>
            <Content>
               <Logo />
               <Navigation />
               <QuickCall
                  phoneNumber={{
                     href: "+998932461331",
                     textContent: "+998 (93) 246-13-31",
                  }}
               />
            </Content>
         </Container>
      </StyledHeader>
   );
};

export default Header;
