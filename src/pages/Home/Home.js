import React, { useContext } from "react";
import Context from "../../contexts/Context";
import styled from "styled-components";
import bgFoto from "../../assets/images/bg-foto.jpg";

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    background-color: #212121;
    opacity: 0.8;
  }
`;

const HomeH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.light};
  opacity: 0.7;
  margin-bottom: 20px;
`;

const HomeH2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.color.light};
`;

const HomeImg = styled.div`
  width: 100%;
  max-width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-bottom: 30px;
  overflow: hidden;

  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: cover;

  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.leading};
    opacity: 0.5;
  }
`;

const Home = () => {
  const value = useContext(Context);
  const { welcomeSlogan } = value;

  return (
    <HomeDiv src={bgFoto}>
      <HomeH1>Mariusz Biernacki</HomeH1>
      <HomeH2>{welcomeSlogan}</HomeH2>
    </HomeDiv>
  );
};

export default Home;
