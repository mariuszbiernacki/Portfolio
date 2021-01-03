import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  padding-bottom: 30px;
`;

const Paragraph = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export default Paragraph;
