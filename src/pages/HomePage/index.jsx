import Layout from "../../components/shared/Layout";
import Banner from "../../components/Banner";
import Reliability from "../../components/Reliability";
import HotTours from "../../components/HotTours";
import About from "../../components/About";
import Services from "../../components/Services";
import Consultation from "../../components/Consultation";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   return (
      <Layout>
         <Banner />
         <Reliability />
         <HotTours />
         <About />
         <Services />
         <Consultation />
      </Layout>
   );
};

export default HomePage;
