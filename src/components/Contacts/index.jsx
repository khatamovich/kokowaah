import StyledContacts, { Content, Box } from "./Contacts.styled";
import Container from "../shared/Container";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";

const Contacts = () => (
   <StyledContacts>
      <Container>
         <Content>
            <Box>
               <FiPhoneCall />

               <div>
                  <h4>Номер телефона</h4>
                  <a href="tel:+998932461331">+998 (93) 246 13 31 </a>
               </div>
            </Box>

            <Box>
               <TfiEmail />

               <div>
                  <h4>Почта</h4>
                  <a href="mailto:support@kokowaah.uz">support@kokowaah.uz</a>
               </div>
            </Box>

            <Box>
               <SlLocationPin />

               <div>
                  <h4>Адрес</h4>
                  <p>
                     г. Ташкент, Яккасарайский район, ул. Ш-Руставели 2
                     ваг.пр.дом №1
                  </p>
               </div>
            </Box>
         </Content>
      </Container>
   </StyledContacts>
);

export default Contacts;
