import StyledReliability, { Content, Main, Image } from "./Reliability.styled";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";

const Reliability = () => {
   return (
      <StyledReliability>
         <Container>
            <Content>
               <Main>
                  <SectionHeading
                     title={{
                        content: "Выбирая Kokowaah вы",
                        highlight: "выбираете надёжность и качество",
                     }}
                     slogan="Всегда в наличии горящие туры на море, авиабилеты и отели
                     по лучшим ценам!"
                  />

                  <p>
                     Оператор предлагает хороший выбор направлений – примерно 35
                     стран. Вылеты по турам чартерными рейсами и регуляркой из
                     30 региональных городов России. Туроператор имеет
                     собственную авиакомпанию Royal Flight и самолеты в лизинге,
                     летающие под брендом «Уральских авиалиний».
                  </p>
               </Main>

               <Image>
                  <img src="/mercedes.jpg" />
                  <img src="/pic.jpg" />
               </Image>
            </Content>
         </Container>
      </StyledReliability>
   );
};

export default Reliability;
