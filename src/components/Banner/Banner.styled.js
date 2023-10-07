import styled from "styled-components";

const StyledBanner = styled.section`
   height: 100vh;
   background: url("/beauty.jpg") right / cover no-repeat;
   position: relative;

   @media (width <= 500px) {
      height: 100vh;
      background:
         linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent),
         url("/beauty.jpg") right / cover no-repeat;
   }
`;

export const Content = styled.div`
   display: flex;
   align-items: center;
   height: inherit;
   position: relative;
   z-index: 1;
   padding-top: 3em;

   @media (width <= 500px) {
      padding: 0;
   }
`;

export const Main = styled.div`
   width: 70%;
   padding: 3em;
   transform: translateX(-7%);
   border-radius: 12px;
   box-shadow: 0 3px 10px -1px rgba(0, 0, 0, 0.3);
   color: #eee;
   background: rgba(0, 0, 0, 0.2);

   h1 {
      max-width: 15ch;
      font-size: 64px;
      line-height: 1;
      color: #fff;
      text-shadow: 1px 1px 30px rgba(0, 0, 0, 0.3);
   }

   p {
      margin-top: 1em;
      max-width: 65ch;
      font-size: 1.8rem;
      font-weight: 400;
      color: #eee;
   }

   // Query
   @media (width <= 500px) {
      width: 100%;
      height: 100%;
      transform: none;
      background: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 0;
      padding: 0;
      box-shadow: none;

      h1 {
         max-width: 13ch;
         font-size: 42px;
         line-height: 1.2;
         text-transform: uppercase;
      }

      p {
         max-width: 100%;
         font-size: 1.6rem;
      }
   }
`;

export const Links = styled.div`
   display: flex;
   gap: 1em;

   a {
      display: inline-block;
      margin-top: 2em;
      border-radius: 7px;
      padding: 1em 1.25em;
      font-family: "Montserrat";
      font-size: 1.8rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.75em;

      &:nth-child(1) {
         background: darkOrange;/
         background: darkOrange linear-gradient(darkorange, #ff8c00)
         color: white;
      }
   }

   @media (width <= 500px) {
      display: flex;
      flex-direction: column;
      margin-top: 1.5em;
      gap: 1em;


      a {
         width: fit-content;
         margin: 0;

         &:last-of-type {
            padding: .5em 1em;
         }
      }
   }
`;

export default StyledBanner;
