import styled from "styled-components";

const StyledReliability = styled.section`
  &:hover img:nth-child(1) {
    right: 65%;
  }

  &:hover img:nth-child(2) {
    margin-left: 10%;
  }

  @media (width <= 500px) {
    &:hover img {
      right: 0;
      margin-left: 3%;
    }
  }
`;

export const Content = styled.div`
  padding-top: 7em;
  display: flex;
  justify-content: space-between;

  @media (width <= 500px) {
    padding-top: 3em;
    flex-direction: column;
  }
`;

export const Main = styled.div`
  width: 100%;
  max-width: 660px;

  article + p {
    margin-top: 2em;
    max-width: 75ch;
  }

  @media (width <= 500px) {
    article + p {
      margin-top: 1em;
    }

    margin-top: -1em;
    margin-bottom: 2em;
  }
`;

export const Image = styled.div`
  max-width: fit-content;
  height: 500px;
  transform: translateY(-43%);
  position: relative;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 15px;
    border: 5px solid orange;
    box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.5);
    transition: 500ms ease-in-out;

    &:nth-child(1) {
      position: absolute;
      top: 30%;
      right: 70%;
    }
  }

  @media (width <= 500px) {
    margin-top: 3em;
    transform: none;
    height: 375px;
    order: -1;
    // margin: 3em auto 10em;
    transform: translateY(-50%) translateX(40%);
    z-index: 1;

    img {
      width: 100%;
      max-width: 300px;
      object-fit: cover;
      position: static;
    }
  }
`;

export default StyledReliability;
