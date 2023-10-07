import StyledServices, { Content, Main, Service } from "./Services.styled";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { LuBookOpen } from "react-icons/lu";

const Services = () => (
   <StyledServices>
      <Container>
         <Content>
            <Service>
               <MdOutlineModeOfTravel />

               <h3>Гиды профессионалы</h3>

               <p>
                  Если Вам нужны Гиды профессионалы, то Вы обратились по адресу.
                  У нас вы найдете только самых лучших гидов.
               </p>
            </Service>

            <Service>
               <LuBookOpen />

               <h3>Легко и просто</h3>

               <p>
                  На нашем сайте вы с можете забронировать понравившийся тур и
                  наши специалисты с вами свяжутся в тот же день
               </p>
            </Service>

            <Main>
               <SectionHeading
                  title={{
                     content: "Мы предоставляем",
                     highlight: "лучший сервис",
                  }}
               />
               <p>
                  Мы предоставляем комплексные туристические услуги как по
                  Узбекистану так и по всему миру!
               </p>

               <p>
                  Так же вы можете приобрести у нас авиабилеты и прочие
                  необходимости по доступной цене.
               </p>
            </Main>
         </Content>
      </Container>
   </StyledServices>
);

export default Services;
