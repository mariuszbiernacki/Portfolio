import React from "react";
import Card from "../molecules/Card";
import imgPortfolio from "../../assets/images/portfolio-screen.png";
import imgFootballStore from "../../assets/images/football-store-screen.png";
import imgHalloweenlStore from "../../assets/images/halloween-store-screen.png";
import imgMovielist from "../../assets/images/movie-list-screen.png";
import imgTodolist from "../../assets/images/todolist-screen.png";
import imgCalculator from "../../assets/images/calculator-screen.png";
import imgRestaurantRecipes from "../../assets/images/restaurant-recipes-screen.png";
import { Row } from "react-bootstrap";

const Tech = "Technologie: ";
const TechReactHooks = "React (hooks)";
const TechReactClasses = "React (classes)";
const TechRedux = "Redux";
const TechStyledComponents = "Styled-Components";
const TechSass = "Sass";
const TechJs = "JavaScript";
const TechCss = "CSS";

const Cards = () => {
  return (
    <Row>
      <Card
        title="Strona portfolio"
        image={imgPortfolio}
        srcGt=""
        srcLive="https://react-portfolio-application.netlify.app"
        techs={[Tech, TechReactHooks, TechStyledComponents]}
      />
      <Card
        title="Sklep Halloween"
        image={imgHalloweenlStore}
        srcGt="https://github.com/mariuszbiernacki/Halloween-store"
        srcLive="https://react-halloween-store.netlify.app"
        techs={[Tech, TechReactHooks, TechStyledComponents]}
      />
      <Card
        title="Lista filmów"
        image={imgMovielist}
        srcGt="https://github.com/mariuszbiernacki/Movie-list-app"
        srcLive="https://react-movielist-app.netlify.app"
        techs={[Tech, TechReactHooks, TechSass]}
      />
      <Card
        title="Lista obowiązków"
        image={imgTodolist}
        srcGt="https://github.com/mariuszbiernacki/Todolist"
        srcLive="https://react-todolist-application.netlify.app"
        techs={[Tech, TechReactHooks, TechStyledComponents]}
      />
      <Card
        title="Kalkulator"
        image={imgCalculator}
        srcGt="https://github.com/mariuszbiernacki/Calculator"
        srcLive="https://js-calculator-application.netlify.app"
        techs={[Tech, TechJs, TechCss]}
      />
      <Card
        title="Wyszukiwarka przepisów kulinarnych"
        image={imgRestaurantRecipes}
        srcGt="https://github.com/mariuszbiernacki/Restaurant-recipes"
        srcLive="https://restaurant-receipes-search-app.netlify.app"
        techs={[Tech, TechReactClasses, TechSass]}
      />
      <Card
        title="Sklep z koszulkami piłkarskimi"
        image={imgFootballStore}
        srcGt="https://github.com/mariuszbiernacki/Football-store"
        srcLive="https://react-football-store.netlify.app"
        techs={[Tech, TechReactHooks, TechStyledComponents]}
      />
    </Row>
  );
};

export default Cards;
