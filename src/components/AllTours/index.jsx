import StyledAllTours, { Content } from "./AllTours.styled";
import Container from "../shared/Container";
import tours from "../../db/tours";
import TourCard from "../TourCard";
import { useLocation } from "react-router-dom";

const AllTours = () => {
   const { search } = useLocation();

   return (
      <StyledAllTours>
         <Container>
            <Content>
               {search === "?country=uzbekistan"
                  ? tours
                       .filter(
                          (tour) =>
                             tour.country?.toLowerCase() ==
                             search.replace("?country=", "")
                       )
                       .map((tour, i) => {
                          return (
                             <TourCard
                                className="tour"
                                key={`tour-${tour.id}`}
                                tour={tour}
                             />
                          );
                       })
                  : tours?.map((tour, i) => {
                       return (
                          <TourCard
                             className="tour"
                             key={`tour-${tour.id}`}
                             tour={tour}
                          />
                       );
                    })}
            </Content>
         </Container>
      </StyledAllTours>
   );
};

export default AllTours;
