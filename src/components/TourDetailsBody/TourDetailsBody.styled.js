import styled from "styled-components";

const StyledTourDetailsBody = styled.section`
   ul {
      list-style: none;
      width: 100%;
      max-width: 650px;

      h2 {
         font-size: 2.4rem;
         margin-bottom: 1em;
      }

      li {
         display: flex;
         gap: 0.5em;
         margin-bottom: 0.5em;

         svg {
            font-size: 2.4rem;
         }
      }

      @media (width <= 500px) {
         svg {
            min-width: 3rem;
         }
      }
   }
`;

export const Content = styled.div`
   max-width: 1200px;

   h1 {
      font-size: 3.2rem;
      line-height: 1.3;
      color: darkorange;
      margin-bottom: 1em;
   }

   p {
      margin-bottom: 1.25em;
      padding-bottom: 1em;
      border-bottom: 1px solid #eee;

      &:last-child {
         margin-bottom: 0;
         padding-bottom: 0;
         border-bottom: 0;
      }
   }

   margin-bottom: 2.75em;

   @media (width <= 500px) {
      h1 {
         line-height: 1.1;
         font-size: 2.4rem;
      }
   }
`;

export const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;

   @media (width <= 500px) {
      display: block;

      ul {
         margin-top: 3em;

         h2 {
            line-height: 1.1;
            font-size: 1.8rem;
         }
      }
   }
`;

export const Included = styled.ul`
   li {
      svg {
         color: seagreen;
      }
   }

   margin-bottom: 1em;
`;

export const Excluded = styled.ul`
   li {
      svg {
         color: crimson;
      }
   }
`;

export default StyledTourDetailsBody;
