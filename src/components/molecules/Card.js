import React from "react";
import styled, { css } from "styled-components";
import { Row, Col } from "react-bootstrap";
import Icon from "../atoms/Icon";
import githubIcon from "../../assets/icons/github-brands.svg";
import liveIcon from "../../assets/icons/globe-solid.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #bababa;
  margin-bottom: 30px;
  border-radius: 10px;
  overflow: hidden;
`;

const CardContent = styled.div`
  text-align: center;
  padding: 0 15px;
`;
const CardImage = styled.img`
  width: 100%;
`;

const CardTitle = styled.h2`
  margin-top: 25px;
  margin-bottom: 16px;
  padding-bottom: 8px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.leading};

  border-bottom: 1px solid #bababa;
`;

const CardIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  opacity: 0.7;
`;

const CardTechs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 25px;
`;

const CardTech = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.s};
  opacity: 0.8;
  margin: 0 5px;
`;

const Card = ({ image, title, srcGt, srcLive, techs }) => {
  const techsSection = (
    <>
      {techs.map((tech) => (
        <CardTech key={tech}>{tech}</CardTech>
      ))}
    </>
  );

  return (
    <Col lg={6} md={12}>
      <Wrapper>
        <a href={srcLive} target="_blank" title="demo">
          <CardImage src={image} />
        </a>

        <CardContent>
          <CardTitle>{title}</CardTitle>

          <CardIcons>
            <a href={srcGt} target="_blank" className="mr-3" title="github">
              <Icon size={30} src={githubIcon} />
            </a>
            <a href={srcLive} target="_blank" title="demo">
              <Icon size={30} src={liveIcon} />
            </a>
          </CardIcons>

          <CardTechs>{techsSection}</CardTechs>
        </CardContent>
      </Wrapper>
    </Col>
  );
};

export default Card;
