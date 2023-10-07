import StyledBanner, { Content, Main, Links } from "./Banner.styled";
import Container from "../shared/Container";
import ButtonLink from "../shared/ButtonLink";
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
   return (
      <StyledBanner>
         <Container>
            <Content>
               <Main>
                  <h1>Туры по всему миру от Kokowaah</h1>

                  <p>
                     Присоединяйтесь к одному из самых популярных групповых
                     туров компании <strong>"Kokowaah"</strong>, прошедшему
                     проверку временем и получившему многочисленные
                     положительные отзывы туристов.
                  </p>

                  <Links>
                     <ButtonLink
                        className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
                        to={`/tours?country=uzbekistan`}
                     >
                        Туры по Узбекистану
                     </ButtonLink>

                     <ButtonLink to="/tours">
                        Все туры <FaLongArrowAltRight />
                     </ButtonLink>
                  </Links>
               </Main>
            </Content>
         </Container>
      </StyledBanner>
   );
};

export default Banner;
