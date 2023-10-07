import styled from "styled-components";

const StyledTourDays = styled.section``;

export const Content = styled.div`
   margin: 3em 0;
`;

export const List = styled.ul`
   display: flex;
   justify-content: space-between;

   li {
      border: 1px solid #eee;
      border-radius: 12px;
      padding: 3em;
      box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.1);
      display: flex;
      gap: 2em;
      transition: 300ms ease-in-out;

      &:hover {
         translate: 0 -3%;
         scale: 1.02;
      }
   }

   svg {
      font-size: 4rem;
      color: darkorange;
   }

   @media (width <= 500px) {
      display: block;

      li {
         padding: 2em;
         margin-bottom: 2em;
      }
   }
`;

export const Info = styled.div`
   h3 {
      margin-bottom: 0.5em;
      padding-bottom: 0.5em;
      font-size: 2.8rem;
      position: relative;

      &::after {
         content: "";
         width: 75%;
         max-width: 220px;
         background-color: orange;
         bottom: 0;
         left: 0;
         height: 3px;
         position: absolute;
      }
   }

   @media (width <= 500px) {
      h3 {
         font-size: 2rem;
      }
   }
`;

export default StyledTourDays;
