import StyledTourDays, { Content, List, Info } from "./TourDays.styled";
import Container from "../shared/Container";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsPersonUp } from "react-icons/bs";
import { GiHeavyTimer } from "react-icons/gi";

const TourDays = ({ tour }) => {
   return (
      <StyledTourDays>
         <Container>
            <Content>
               <List>
                  <li>
                     <AiOutlineSchedule />
                     <Info>
                        <h3>
                           {tour.days} {tour.days >= 5 ? "дней" : "дня"}{" "}
                           {tour.nights} {tour.nights >= 5 ? "ночей" : "ночи"}
                        </h3>
                        <p>Количество дней</p>
                     </Info>
                  </li>

                  <li>
                     <BsPersonUp />
                     <Info>
                        <h3>{tour.age || "Отсутствует"}</h3>
                        <p>Возврастное ограничение</p>
                     </Info>
                  </li>

                  <li>
                     <GiHeavyTimer />
                     <Info>
                        <h3>{tour.season}</h3>
                        <p>Сезон тура</p>
                     </Info>
                  </li>
               </List>
            </Content>
         </Container>
      </StyledTourDays>
   );
};

export default TourDays;
