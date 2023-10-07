import styled from "styled-components";

const StyledTourCalculator = styled.div`
  padding: 2em 3em;
  margin-top: 3em;
  margin-bottom: 7.5rem;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 5em;

  h3 {
    font-size: 2.4rem;
    margin-bottom: 1em;
    text-transform: uppercase;
    font-weight: 400;
    font-family: "Roboto";
    letter-spacing: 1px;
  }

  button {
    font-size: inherit;
    padding: 0.75em 1em;
    margin-right: 1em;
  }

  .pay-now {
    padding: 1.25em 2em;
  }

  .cost {
    display: block;
    font-size: 4.8rem;
    font-weight: 700;
    color: darkorange;
  }

  @media (width <= 500px) {
    flex-direction: column;
    align-items: stretch;
    margin-top: 0;
    padding: 0;
    gap: 1em;
  }
`;

export const Column = styled.div`
  @media (width <= 500px) {
    margin-top: 3em;
  }

  &:nth-child(2) {
    background: #fff;
    padding: 3em;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.125);
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 3em;
    margin-top: 0;

    @media (width <= 500px) {
      display: block;
      padding: 2em;

      .cost {
        font-size: 3.2rem;
        margin-bottom: 2rem;
      }
    }
  }
`;

export default StyledTourCalculator;
