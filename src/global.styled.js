import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
      --color-accent-primary: #1c1c1c;
      --color-accent-secondary: orange;
   }

   *,
   *::before,
   *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   html,
   body,
   #root,
   .layout {
      height: 100%;
      overflow-x: hidden;
      -webkit-overflow-x: hidden;
   }

   html {
      font-size: 62.5%;
   }

   body {
      font-family: "Roboto";
      font-size: 1.6rem;
      font-weight: 300;
   }

   .layout {
      display: flex;
      flex-flow: column;
   }

   main {
      flex: 1;
   }

   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      font-family: "Montserrat";
      font-weight: 700;
      color: var(--color-accent-primary);
   }

   p {
      line-height: 1.5;
      color: #777;

      @media (width <= 500px) {
         line-height: 1.35;
      }
   }

   a {
      text-decoration: none;
      color: inherit
   }

   img {
      pointer-events: none;
   }
`;

export default GlobalStyle;
