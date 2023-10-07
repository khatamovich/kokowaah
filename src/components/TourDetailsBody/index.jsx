import StyledTourDetailsBody, {
   Content,
   Wrapper,
   Included,
   Excluded,
} from "./TourDetailsBody.styled";
import Container from "../shared/Container";
import { MdOutlineCancel } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import TourCalculator from "../TourCalculator";

const TourDetailsBody = ({ tour }) => {
   return (
      <StyledTourDetailsBody>
         <Container>
            <Content dangerouslySetInnerHTML={{ __html: tour.body }} />

            <Wrapper>
               {/* Tour includes */}
               <Included>
                  <h2>В стоимость тура включены:</h2>
                  {tour.included?.map((item, i) => (
                     <li key={`included-${i}`}>
                        <TiTickOutline />
                        <p>{item}</p>
                     </li>
                  ))}
               </Included>

               {/* Tour doesn't include */}
               <Excluded>
                  <h2>В стоимость тура не включены:</h2>
                  {tour.excluded?.map((item, i) => (
                     <li key={`excluded-${i}`}>
                        <MdOutlineCancel />
                        <p>{item}</p>
                     </li>
                  ))}
               </Excluded>
            </Wrapper>

            <TourCalculator tour={tour} />
         </Container>
      </StyledTourDetailsBody>
   );
};

export default TourDetailsBody;
