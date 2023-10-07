import StyledAllToursBanner, { Content, Main } from "./AllToursBanner.styled";
import Container from "../shared/Container";

const AllToursBanner = () => (
   <StyledAllToursBanner>
      <Container>
         <Content>
            <Main>
               <p>Туры на ваш вкус и цвет</p>
               <h1>Список всех туров от Kokowaah</h1>
            </Main>
         </Content>
      </Container>
   </StyledAllToursBanner>
);

export default AllToursBanner;
