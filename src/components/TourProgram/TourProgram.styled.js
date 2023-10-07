import styled from "styled-components";

const StyledTourProgram = styled.section``;

export const Content = styled.div`
   padding-top: 5em;
   padding-bottom: 5em;
`;

export const Program = styled.article`
   display: flex;
   gap: 2.25em;
   padding-bottom: 5em;
   position: relative;

   &:last-of-type {
      margin-bottom: 0;
      border-bottom: 0;
      padding-bottom: 0;
   }

   &::after {
      content: "";
      display: block;
      width: 5px;
      height: 100%;
      background-color: darkorange;
      z-index: -1;
      position: absolute;
      top: 0;
      left: 50px;
   }

   @media (width <= 500px) {
      display: block;
      text-align: center;

      &::after {
         display: none;
      }
   }
`;

export const Counter = styled.div`
   width: 30px;
   height: 30px;
   padding: 1.5em;
   border-radius: 100%;
   border: 5px solid darkorange;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 700;
   font-size: 3.2rem;
   font-family: "Montserrat";
   color: darkorange;
   letter-spacing: 3px;
   background-color: #fff;

   @media (width <= 500px) {
      font-size: 2.4rem;
      margin: 0 auto;
      margin-bottom: 1em;
   }
`;

export const Details = styled.div`
   h2 {
      font-size: 3.2rem;
      color: darkorange;
   }

   @media (width <= 500px) {
      h2 {
         font-size: 2.4rem;
         line-height: 1.2;
         margin-bottom: 1em;
      }
   }
`;

export default StyledTourProgram;
