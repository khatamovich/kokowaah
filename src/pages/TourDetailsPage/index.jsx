import Layout from "../../components/shared/Layout";
import TourDays from "../../components/TourDays";
import TourDetailsBody from "../../components/TourDetailsBody";
import TourProgram from "../../components/TourProgram";
import TourTabs from "../../components/TourTabs";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import tours from "../../db/tours";

const TourDetailsPage = () => {
   const { tour } = useParams();
   const [currentTour, setCurrentTour] = useState({});
   const [activeTab, setActiveTab] = useState("Описание тура");

   useEffect(() => {
      const tourId = Number(tour);

      const result = tours?.find((tour) => tour.id == tourId);

      if (result) setCurrentTour(result);

      return () => setCurrentTour({});
   }, [tour]);

   return (
      <Layout themeColor="#fafafa">
         <TourTabs activeTab={activeTab} setActiveTab={setActiveTab} />

         {activeTab == "Описание тура" && (
            <>
               <TourDays tour={currentTour} />
               <TourDetailsBody tour={currentTour} />
            </>
         )}

         {activeTab == "Программа тура" && <TourProgram tour={currentTour} />}
      </Layout>
   );
};

export default TourDetailsPage;
