import styled from "styled-components";

const StyledAllToursBanner = styled.section`
   background: url("woman-in-red.jpg") center / cover no-repeat;
`;

export const Content = styled.div`
   min-height: 75vh;
   padding-top: 75px;
   display: flex;
   align-items: center;
   position: relative;

   img {
      width: 100%;
      max-width: 1000px;
      position: absolute;
      bottom: 5rem;
      right: -20%;

      &:nth-of-type(2) {
         max-width: 700px;
         bottom: 0;
         right: -15rem;
      }
   }
`;

export const Main = styled.div`
   background-color: rgba(0, 0, 0, 0.2);
   box-shadow: 0 3px 10px -1px rgba(0, 0, 0, 0.3);
   width: 70%;
   padding: 3em;
   transform: translateX(-7%);
   border-radius: 12px;

   h1 {
      max-width: 16ch;
      font-size: 64px;
      line-height: 1;
      color: white;
      text-shadow: 1px 1px 30px rgba(0, 0, 0, 0.3);

      strong {
         color: orange;
      }
   }

   p {
      margin-top: 1em;
      max-width: 65ch;
      font-size: 1.8rem;
      font-weight: 400;
      color: white;
   }
`;

export default StyledAllToursBanner;
