import { useState, useEffect } from "react";

export const useTourCalculator = () => {
  const [peopleCount, setPeopleCount] = useState(1);

  const handleIncPeopleCount = () => {
    setPeopleCount((prevState) => prevState + 1);
  };

  const handleDecPeopleCount = () => {
    peopleCount > 1 && setPeopleCount((prevState) => prevState - 1);
  };

  return {
    peopleCount,
    handleIncPeopleCount,
    handleDecPeopleCount,
  };
};
