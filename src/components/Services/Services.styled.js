import styled from "styled-components";

const StyledServices = styled.section`
   padding: 5em 0 1em;

   @media (width <= 500px) {
      padding: 2em 0;
   }
`;

export const Content = styled.div`
   display: flex;
   align-items: center;

   @media (width <= 500px) {
      display: block;
   }
`;

export const Main = styled.div`
   width: 100%;
   max-width: 525px;
   margin-left: auto;

   h2 {
      padding-bottom: 0.3em;
      border-bottom: 1px solid #eee;
   }

   p {
      margin-top: 1em;
   }

   @media (width <= 500px) {
      max-width: 100%;
      margin-top: 3em;
   }
`;

export const Service = styled.div`
   width: 100%;
   max-width: 325px;
   padding: 3em 2em;
   margin-right: 4em;
   border-radius: 15px;
   box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
   background-color: #fff;
   transition: 500ms;

   &:nth-child(1) {
      color: red;
      transform: translateY(-45%);
   }

   &:nth-child(2) {
      color: red;
      transform: translateY(-10%);
   }

   &:hover {
      translate: 0 -3%;
      scale: 1.02;
   }

   svg {
      margin-bottom: 2rem;
      width: 48px;
      height: 48px;
      color: orange;
      background-color: #fafafa;
      padding: 0.3em;
      border-radius: 10px;
      border: 3px solid orange;
   }

   h3 {
      font-size: 1.8rem;
      margin-bottom: 0.5em;
   }

   @media (width <= 500px) {
      transform: none !important;
      margin: 0 auto;
      max-width: 100%;

      &:nth-child(1) {
         margin-bottom: 1em;
      }
   }
`;

export default StyledServices;
