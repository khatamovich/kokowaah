import StyledTourCard, { Head, Body, Cost } from "./TourCard.styled";
import ButtonLink from "../shared/ButtonLink";
import { MdReadMore } from "react-icons/md";

const TourCard = ({ tour, className }) => {
   return (
      <StyledTourCard className={className}>
         <Head>
            <img src={tour.poster} />
            <Cost>{tour.cost.toLocaleString("ru-RU")} сум</Cost>
         </Head>

         <Body>
            <p>{tour.description}</p>
            <h3>{tour.name}</h3>
            <ButtonLink
               className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
               to={`/tours/${tour.id}`}
            >
               Детали
               <MdReadMore />
            </ButtonLink>
         </Body>
      </StyledTourCard>
   );
};

export default TourCard;
