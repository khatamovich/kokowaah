import styled from "styled-components";

const StyledContacts = styled.section`
   padding: 3em 0;

   @media (width <= 500px) {
      padding: 0;
   }
`;

export const Content = styled.div`
   display: flex;
   justify-content: space-between;

   @media (width <= 500px) {
      flex-direction: column;
      gap: 2em;
   }
`;

export const Box = styled.div`
   display: flex;
   align-items: center;
   gap: 2em;

   svg {
      width: 44px;
      height: 43px;
      color: orange;
      background-color: #fff;
      padding: 0.3em;
      border-radius: 10px;
      border: 3px solid orange;
   }

   a:link,
   a:visited,
   a:active {
      color: #777;
   }

   &:nth-child(3) {
      background-color: #fff;
      padding: 2em 2em 2em 1em;
      box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.1);
      border-radius: 15px;
      transform: translateY(-50%);

      svg {
         transform: translateX(0.4em);
         border: none;
         padding: 0;
      }

      @media (width <= 500px) {
         transform: none;
      }
   }
`;

export default StyledContacts;
