import StyledFooter, { Content, Socials } from "./Footer.styled";
import Container from "../Container";
import Navigation from "../../Navigation";
import { BsInstagram } from "react-icons/bs";
import { LiaTelegramPlane } from "react-icons/lia";
import { FiFacebook } from "react-icons/fi";
import Contacts from "../../Contacts";
import Logo from "../../Logo";

const Footer = () => (
   <>
      <Contacts />
      <StyledFooter>
         <Container>
            <Content>
               <Logo />

               <Navigation />

               <Socials>
                  <a href="#">
                     <BsInstagram />
                  </a>

                  <a href="#">
                     <LiaTelegramPlane />
                  </a>

                  <a href="#">
                     <FiFacebook />
                  </a>
               </Socials>
            </Content>
         </Container>
      </StyledFooter>
   </>
);

export default Footer;
