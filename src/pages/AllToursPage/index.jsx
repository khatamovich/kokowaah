import Layout from "../../components/shared/Layout";
import AllTours from "../../components/AllTours";
import AllToursHead from "../../components/AllToursHead";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const AllToursPage = () => {
   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   return (
      <Layout>
         <AllToursHead />
         <AllTours />
      </Layout>
   );
};

export default AllToursPage;
