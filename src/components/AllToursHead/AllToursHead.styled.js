import styled from "styled-components";

const StyledAllToursHead = styled.section`
   height: 35vh;

   @media (width <= 500px) {
      height: auto;
   }
`;

export const Content = styled.div`
   height: inherit;
   min-height: inherit;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-top: 10em;
   border-bottom: 1px solid #eee;

   /* Search */
   form {
      width: 100%;
      max-width: 400px;
      border-radius: 15px;
      overflow: hidden;

      input {
         padding: 0.5em;
         font-size: inherit;
         display: block;
         width: 100%;
         font-size: 2rem;
         border-bottom: 3px solid orange;
         outline: none;
      }
   }

   @media (width <= 500px) {
      flex-direction: column;
      padding-top: 3em;
      border-bottom: none;
      align-items: flex-start;

      form {
         max-width: 100%;
         order: -1;
         margin-bottom: 2em;

         input {
            padding-left: 0.5em;
         }
      }
   }
`;

export const Main = styled.div``;

export default StyledAllToursHead;
