import StyledTourCalculator, { Column } from "./TourCalculator.styled";
import ButtonLink from "../shared/ButtonLink";
import { useState } from "react";
import { useTourCalculator } from "../../hooks/useTourCalculator";
import axios from "axios";

const TourCalculator = ({ tour }) => {
  const { handleIncPeopleCount, handleDecPeopleCount, peopleCount } =
    useTourCalculator();

  const handleCheckout = () => {
    if (!tour || !tour.cost || !tour.name)
      return console.warn("Failed to pay for the tour.");

    axios
      .post(
        "https://bots.texnoweb.uz/diyoraka/kokowaah/createOrder/prepare.php",
        {
          people_count: peopleCount,
          price: tour.cost,
          tour_name: tour.name,
        },
      )
      .then(({ data }) => {
        if (!data.error) {
          window.location.assign(data.paycomurl);
        }
      });
  };

  if (!tour.cost || !tour.name) return null;

  return (
    <StyledTourCalculator>
      <Column>
        <h3>Количество людей: {peopleCount}</h3>

        <button
          onClick={handleDecPeopleCount}
          className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
        >
          Меньше
        </button>

        <button
          onClick={handleIncPeopleCount}
          className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
        >
          Больше
        </button>
      </Column>

      <Column>
        <span className="cost">
          {(tour.cost * peopleCount)?.toLocaleString("ru-RU")} сум
        </span>

        <button
          onClick={handleCheckout}
          className="pay-now text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
        >
          Оплитить сейчас
        </button>
      </Column>
    </StyledTourCalculator>
  );
};

export default TourCalculator;
