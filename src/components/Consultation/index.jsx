import StyledConsultation, { Main, Content } from "./Consultation.styled";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";
import AirplaneSVG from "../AirplaneSVG";
import ButtonLink from "../shared/ButtonLink";

const Consultation = () => (
   <StyledConsultation>
      <Container>
         <Content>
            <Main>
               <SectionHeading
                  slogan="Наши специалисты с вами свяжутся и проконсультируют"
                  title={{
                     content: "Оставьте свой",
                     highlight: "номер телефона",
                  }}
               />

               <form>
                  <input
                     type="text"
                     placeholder="Ваш номер телефона: +998 (**) **-**-**"
                  />
                  <ButtonLink
                     className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
                     href="/tours"
                  >
                     Записаться на консультацию
                  </ButtonLink>
               </form>
            </Main>

            <AirplaneSVG />
         </Content>
      </Container>
   </StyledConsultation>
);

export default Consultation;
