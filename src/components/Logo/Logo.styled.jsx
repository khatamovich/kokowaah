import styled from "styled-components";

const StyledLogo = styled.div`
   img {
      display: block;
      width: 20rem;
   }

   .title {
      display: block;
      font-weight: 700;
      font-family: "Montserrat";
      font-size: 3.2rem;
      line-height: 1.1;
      position: relative;
      padding-bottom: 0.3rem;

      &::after {
         content: "";
         display: block;
         width: 85%;
         background: darkorange;
         position: absolute;
         height: 3px;
         border-radius: 15px;
         bottom: 0;
         left: 0;
      }
   }
`;

export const Slogan = styled.p`
   font-size: 1.8rem;
   line-height: 1;
`;

export default StyledLogo;
