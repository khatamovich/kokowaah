import styled from "styled-components";

const StyledConsultation = styled.section`
   padding: 0 0 5em;
   background-color: #fff;
`;

export const Content = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   svg {
      width: 100%;
      max-width: 650px;
   }

   @media (width <= 500px) {
      display: block;

      svg {
         margin-bottom: 2em;
      }
   }
`;

export const Main = styled.div`
   width: 100%;
   max-width: 600px;
   padding: 4em 5em;
   border-radius: 30px;
   box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.1);
   transform: translateX(-6%);
   position: relative;

   form {
      input {
         margin-top: 2em;
         display: block;
         font-size: 1.8rem;
         padding: 0.75em;
         border: 3px solid orange;
         border-radius: 15px;
         width: 100%;
         box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.1);
      }
   }

   a {
      margin-top: 2em;
      font-size: inherit;
      padding: 1.25em 2em;
   }

   @media (width <= 500px) {
      padding: 2em;
      transform: none;
      margin: 1em 0 6em;

      a {
         padding: 1.25em 1em;
         width: 100%;
         display: flex;
         justify-content: center;
      }
   }
`;

export default StyledConsultation;
