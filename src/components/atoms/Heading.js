import React from "react";
import styled from "styled-components";

const Header = styled.header`
  padding-bottom: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const H2 = styled.h2`
  color: ${({ theme }) => theme.color.dark};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0;
`;

const LineDecorator = styled.span`
  display: block;
  height: 1px;
  background-color: ${({ theme }) => theme.color.dark};
  flex-grow: 1;
  @media (max-width: 576px) {
    display: none;
  }
  :nth-of-type(1) {
    margin-right: 20px;
  }
  :nth-of-type(2) {
    margin-left: 20px;
  }
`;

const Heading = ({ children }) => {
  return (
    <Header>
      <LineDecorator />
      <H2>{children}</H2>
      <LineDecorator />
    </Header>
  );
};

export default Heading;
