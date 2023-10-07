import styled from "styled-components";

const StyledHotTours = styled.section`
   background: #fff;
`;

export const Content = styled.div`
   padding: 7em 0 0;
   display: flex;
   justify-content: space-between;
   position: relative;

   /* Swiper styles */
   .swiper {
      top: 0;
      position: absolute;
      width: 100%;
      max-width: 1050px;
      display: flex;
      border-radius: 15px;
      transform: translateY(-30%) translateX(-35%);
      padding: 1em;
   }

   @media (width <= 500px) {
      padding: 3em 0;
      flex-direction: column;
      align-items: center;

      .swiper {
         position: static;
         transform: none;
         margin-top: -2em;
         margin-bottom: 1em;

         &-slide {
            &:nth-child(1) {
               display: none;
            }
         }
      }
   }
`;

export const Main = styled.div`
   margin-left: auto;
   width: 100%;
   max-width: 660px;
   transform: translateY(-50%) translateX(12%);

   article + p {
      margin-top: 2em;
      max-width: 75ch;
   }

   a {
      margin-top: 1.75em;
      font-size: 1.6rem;
      padding: 1.25em 1em;
   }

   @media (width <= 500px) {
      transform: none;
   }
`;

export default StyledHotTours;
