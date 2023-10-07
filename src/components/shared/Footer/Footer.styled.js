import styled from "styled-components";

const StyledFooter = styled.footer`
   padding: 3em 0;
   background-color: #fafafa;

   @media (width <= 500px) {
      background: orange;
      margin-top: -2em;
      z-index: -1;
      border-radius: 30px 30px 0 0;
   }
`;

export const Content = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   img {
      max-width: 125px;
   }

   @media (width <= 500px) {
      flex-direction: column;
      padding-top: 1.5em;

      nav {
         margin-top: 0.5em;
      }
   }
`;

export const Socials = styled.div`
   display: flex;
   gap: 1.5em;

   svg {
      width: 40px;
      height: 40px;
      background-color: #fff;
      border: 2px solid darkorange;
      padding: 0.3em;
      border-radius: 10px;
      color: darkorange;
   }

   @media (width <= 500px) {
      width: fit-content;
      margin: 1em auto 0;

      svg {
         background: transparent;
         color: #333;
         border: 2px solid #333;
      }
   }
`;

export default StyledFooter;
