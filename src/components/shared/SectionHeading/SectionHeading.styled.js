import styled from "styled-components";

export const StyledSectionHeading = styled.article`
   h2 {
      line-height: 1;
      font-size: 4.8rem;
      strong {
         display: block;
         color: var(--color-accent-secondary);
      }
   }

   p {
      padding-left: 4px;
   }

   @media (width <= 500px) {
      h2 {
         font-size: 24px;
      }

      p {
         font-size: 1.6rem;
         text-indent: -3px;
      }
   }
`;

export default StyledSectionHeading;
