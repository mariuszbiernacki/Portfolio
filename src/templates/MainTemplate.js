import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import GlobalStyle from "../theme/GlobalStyle";
import { Container } from "react-bootstrap";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const ContentParent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ContentParent>
          <Navbar />
          <Content>{children}</Content>
        </ContentParent>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
