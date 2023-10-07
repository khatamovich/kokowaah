import styled from "styled-components";

const StyledHeader = styled.header`
   display: flex;
   justify-content: space-between;
   position: absolute;
   width: 100%;
   top: 0;
   left: 0;
   background-color: rgba(255, 255, 255, 0.99);
   z-index: 999;

   @media (width <= 500px) {
      display: none;
   }
`;

export const Content = styled.div`
   display: flex;
   align-items: center;
   gap: 5em;
   padding: 1.25em 0;
`;

export default StyledHeader;
