import styled from "styled-components";

const StyledAbout = styled.section`
   background: #fafafa;
   overflow: hidden;

   @media (width <= 500px) {
      background: orange;
   }
`;

export const Content = styled.div`
   padding: 10em 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: url("/travel.png") right center / 720px no-repeat;
   position: relative;
   z-index: 1;

   @media (width <= 500px) {
      padding: 2em 0;
      background: none;
   }
`;

export const Main = styled.article`
   width: 100%;
   max-width: 700px;
   transform: translateX(-3%);

   p {
      margin-top: 1em;
      color: #777;

      &:first-child {
         color: #777;
      }
   }

   a {
      margin-top: 2em;
      padding: 1.25em 1em;
      font-size: inherit;
   }

   @media (width <= 500px) {
      transform: none;
      max-width: 100%;
      background: white;
      padding: 2em 1em;
      box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.3);
      border-radius: 15px;
   }
`;

export const RunningMan = styled.img`
   width: 550px;
   position: absolute;
   bottom: -4.5rem;
   right: -10%;

   @media (width <= 500px) {
      bottom: 5%;
      right: -15%;
      width: 150px;
   }
`;

export default StyledAbout;
