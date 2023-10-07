import StyledTourProgram, {
   Content,
   Program,
   Counter,
   Details,
} from "./TourProgram.styled";
import Container from "../shared/Container";

const TourProgram = ({ tour }) => (
   <StyledTourProgram>
      {console.log("Hello, world", tour)}
      <Container>
         <Content>
            {tour.program?.map((program, i) => (
               <Program key={`program-${i}`}>
                  <Counter>{program.id}</Counter>

                  <Details>
                     <h2>{program.title}</h2>
                     <p>{program.description}</p>
                  </Details>
               </Program>
            ))}
         </Content>
      </Container>
   </StyledTourProgram>
);

export default TourProgram;
