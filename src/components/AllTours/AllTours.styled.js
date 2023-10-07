import styled from "styled-components";

const StyledAllTours = styled.section``;

export const Content = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin: 0 -1em;
   padding: 5em 0 10em;

   .tour {
      width: calc((100% / 4) - 2em);
      margin: 1em;
   }

   @media (width <= 500px) {
      display: block;
      padding-bottom: 3em;
      padding-top: 3em;

      .tour {
         width: 100%;
         margin: 0 auto;
         margin-bottom: 3em;
      }
   }
`;

export default StyledAllTours;
