import styled from "styled-components";

const StyledNavigation = styled.nav`
   display: flex;
   gap: 3em;

   .link {
      /* Active page */
      font-family: "Montserrat";
      font-weight: 400;
      padding: 1em 0;

      &.active {
         font-weight: 700;
      }
   }
`;

export default StyledNavigation;
