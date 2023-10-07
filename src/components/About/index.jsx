import StyledAbout, { Content, Main, RunningMan } from "./About.styled";
import SectionHeading from "../shared/SectionHeading";
import Container from "../shared/Container";
import ButtonLink from "../shared/ButtonLink";

const About = () => (
   <StyledAbout>
      <Container>
         <Content>
            <Main>
               <SectionHeading
                  slogan="Не ошибитесь в выборе"
                  title={{
                     content: "Лучшее туристическое",
                     highlight: "агентство Kokowaah",
                  }}
               />

               <p>
                  Kokowaah – компания созданная 2020 году с целью осуществления
                  туроператорской и агентской деятельности.
               </p>

               <p>
                  На сегодняшний день Kokowaah предлагает полный комплекс
                  туристических услуг по организации путешествий для
                  индивидуального и группового отдыха.
               </p>

               <p>
                  Осуществляя Ваши пожелания и предпочтения, мы организуем
                  незабываемый, увлекательный и познавательный отдых для Вас от
                  которого Вы получите много ярких впечатлений и эмоции.
               </p>
            </Main>

            <RunningMan src="/running-man.png" />
         </Content>
      </Container>
   </StyledAbout>
);

export default About;
