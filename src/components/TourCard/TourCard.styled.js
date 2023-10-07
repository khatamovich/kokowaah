import styled from "styled-components";

const StyledTourCard = styled.div`
   width: 100%;
   max-width: 335px;
   min-height: 325px;
   border-radius: 15px;
   padding: 0.5em;
   background-color: #fff;
   box-shadow:
      orange 0px 0px 0px 2px inset,
      orange 5px -10px 0px -3px,
      orange 5px -10px;
`;

export const Head = styled.div`
   height: 235px;
   border-radius: inherit;
   position: relative;

   img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 12px;
   }
`;

export const Body = styled.div`
   padding: 1em;

   h3 {
      font-size: 1.8rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      color: #333;
   }

   p {
      font-size: 1.4rem;
   }

   a {
      font-size: inherit;
      padding: 0.35em 1em;
      margin-top: 1em;

      svg {
         font-size: 2.4rem;
         margin-left: 0.3em;
      }
   }
`;

export const Cost = styled.span`
   font-size: 1.6rem;
   font-weight: 700;
   font-family: "Montserrat";
   border-radius: 4px;
   display: block;
   position: absolute;
   bottom: 0.5em;
   right: 0.5em;
   background: darkorange;
   color: white;
   padding: 0.3em 0.75em;
`;

export default StyledTourCard;
