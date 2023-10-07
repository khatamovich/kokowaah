import GlobalStyle from "./global.styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

// Pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AllToursPage = lazy(() => import("./pages/AllToursPage"));
const TourDetailsPage = lazy(() => import("./pages/TourDetailsPage"));

const App = () => {
   return (
      <>
         <GlobalStyle />
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/tours/" element={<AllToursPage />} />
               <Route path="/tours/:tour" element={<TourDetailsPage />} />
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default App;
