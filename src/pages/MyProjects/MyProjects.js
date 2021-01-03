import React from "react";
import Cards from "../../components/organisms/Cards";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const StyledContainer = styled(Container)`
  padding: 100px 0;
`;

const MyProjects = () => {
  return (
    <StyledContainer>
      <Cards />
    </StyledContainer>
  );
};

export default MyProjects;
