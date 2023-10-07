import StyledAllToursHead, { Content, Main } from "./AllToursHead.styled";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";
import Search from "../Search";

const AllToursHead = () => (
   <StyledAllToursHead>
      <Container>
         <Content>
            <Main>
               <SectionHeading
                  slogan="У нас большой асортимент сочных туров"
                  title={{
                     content: "Выбирайте туры",
                     highlight: "На ваш вкус и цвет",
                  }}
               />
            </Main>

            <Search placeholder="Какой тур Вас интересует?" />
         </Content>
      </Container>
   </StyledAllToursHead>
);

export default AllToursHead;
