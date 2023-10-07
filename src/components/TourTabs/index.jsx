import StyledTourTabs, { Content, Tabs, Tab } from "./TourTabs.styled";
import Container from "../shared/Container";

const TourTabs = ({ activeTab, setActiveTab }) => {
   return (
      <StyledTourTabs>
         <Container>
            <Content>
               <Tabs>
                  <Tab
                     className={`${
                        activeTab === "Описание тура" ? "active" : ""
                     }`}
                     onClick={() => setActiveTab("Описание тура")}
                  >
                     Описание тура
                  </Tab>
                  <Tab
                     className={`${
                        activeTab === "Программа тура" ? "active" : ""
                     }`}
                     onClick={() => setActiveTab("Программа тура")}
                  >
                     Программа тура
                  </Tab>
               </Tabs>
            </Content>
         </Container>
      </StyledTourTabs>
   );
};

export default TourTabs;
