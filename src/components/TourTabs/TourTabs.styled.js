import styled from "styled-components";

const StyledTourTabs = styled.section`
   position: sticky;
   top: 0;
   z-index: 1;
`;

export const Content = styled.div`
   margin-top: 10em;
   padding: 2em;
   box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.1);
   border-radius: 15px;
   background-color: #fff;

   @media (width <= 500px) {
      margin-top: 1em;
      padding: 1.25em;
   }
`;

export const Tabs = styled.div`
   display: flex;
   gap: 3em;

   @media (width <= 500px) {
      gap: 1.5em;
   }
`;

export const Tab = styled.button`
   &.active {
      color: darkorange;
      font-weight: 700;
   }
`;

export default StyledTourTabs;
