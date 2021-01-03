import React from "react";
import Heading from "../../components/atoms/Heading";
import Paragraph from "../../components/atoms/Paragraph";
import List from "../../components/atoms/List";
import ListItem from "../../components/atoms/ListItem";
import styled from "styled-components";
import mariusz_foto from "../../assets/images/mariusz_foto.jpeg";
import { Container, Row, Col } from "react-bootstrap";

const StyledContainer = styled(Container)`
  padding: 100px 0;
`;

const StyledSection = styled.section`
  padding: 20px 10px;
`;

const StyledImg = styled.img`
  border-radius: 50%;
  width: 100%;
  max-width: 250px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const AboutMe = () => {
  return (
    <StyledContainer>
      <StyledSection>
        <Heading>Parę słów na start</Heading>
        <Row style={{ maxWidth: "600px", margin: "auto" }}>
          <Col md={4} sm={12}>
            <StyledImg src={mariusz_foto} />
          </Col>
          <Col md={8} sm={12}>
            <Paragraph>
              Nazywam się Mariusz Biernacki. Ponad rok temu postanowiłem zostać
              Front-end Developerem. Od tego czasu systematycznie uczę się
              programować, głównie z użyciem React.js. Stale rozwijam swoje
              umiejętności. Jestem w trakcie poszerzania swojej wiedzy o Redux.
              Moje doświadczenie potwierdzają zamieszczone na tym portfolio
              projekty.
            </Paragraph>
          </Col>
        </Row>
      </StyledSection>

      <StyledSection>
        <Heading>Doświadczenie zawodowe</Heading>
        <List>
          <ListItem>
            <span>wrzesień 2020 – Obecnie</span>
            <h3>Junior Front-end Developer</h3>
            <span>Interactives</span>
            <Paragraph>
              Tworzenie aplikacji z użyciem React.js i Redux. <br />
              Stylowanie aplikacji za pośrednictwem  styled-components i SASS.{" "}
              <br />
              Tworzenie i optymalizacja stron internetowych
            </Paragraph>
          </ListItem>

          <ListItem>
            <span>czerwiec 2020 – sierpień 2020</span>
            <h3>Stażysta/Asystent</h3>
            <span>Interactives</span>
            <Paragraph>
              Pomoc i nauka tworzenia aplikacji i stron internetowych
            </Paragraph>
          </ListItem>
          <ListItem>
            <span>listopad 2018 – maj 2020</span>
            <h3>Specjalista ds. logistyki / IT Support</h3>
            <span>Rotmex</span>
            <Paragraph>
              Przygotowanie aplikacji z użyciem React.js do zarządzania
              zamówieniami <br />
              Wprowadzanie zmian na stronie internetowej
              <br />
              Koordynacja transportu zamówionych towarów
            </Paragraph>
          </ListItem>
        </List>
      </StyledSection>

      <StyledSection>
        <Heading>Wykształcenie</Heading>
        <List>
          <Paragraph>
            Magister Dziennikarstwa. Uniwersytet Warszawski, 2007-2013
          </Paragraph>
        </List>
      </StyledSection>

      <StyledSection>
        <Heading>Umiejętności</Heading>
        <List>
          <ListItem>JavaScript</ListItem>
          <ListItem>React.js</ListItem>
          <ListItem>Redux</ListItem>
          <ListItem>Styled-components</ListItem>
          <ListItem>SASS</ListItem>
        </List>
      </StyledSection>
    </StyledContainer>
  );
};

export default AboutMe;
