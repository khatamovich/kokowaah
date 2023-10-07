import { Swiper, SwiperSlide as Slide } from "swiper/react";
import StyledHotTours, { Content, Main } from "./HotTours.styled";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";
import TourCard from "../TourCard";
import tours from "../../db/tours";
import ButtonLink from "../shared/ButtonLink";

// Swiper styles
import "swiper/css";

const HotTours = () => {
   return (
      <StyledHotTours>
         <Container>
            <Content>
               {/* Tours slider */}
               <Swiper
                  initialSlide={6}
                  spaceBetween={30}
                  slidesPerView={3}
                  breakpoints={{
                     300: {
                        slidesPerView: 1,
                        centeredSlides: true,
                        spaceBetween: 0,
                     },
                     768: {
                        slidesPerView: 4,
                     },
                     1024: {
                        slidesPerView: 3,
                     },
                  }}
                  rewind={true}
               >
                  {/* Placeholder */}
                  <Slide />

                  {tours?.map((tour, i) => {
                     return (
                        <Slide key={`tour-${i}`}>
                           <TourCard tour={tour} />
                        </Slide>
                     );
                  })}
               </Swiper>

               <Main>
                  <SectionHeading
                     title={{
                        content: "Горящие туры",
                        highlight: "и лучшие предложения по доступным ценам",
                     }}
                     slogan="Успейте приобрести лучший тур по приемлемой цене!"
                  />

                  <ButtonLink
                     to="/tours"
                     type="button"
                     className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
                  >
                     Посмотреть все туры
                  </ButtonLink>
               </Main>
            </Content>
         </Container>
      </StyledHotTours>
   );
};

export default HotTours;
