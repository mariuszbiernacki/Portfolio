import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "../routes";
import Home from "../pages/Home/Home";
import AboutMe from "../pages/AboutMe/AboutMe";
import MyProjects from "../pages/MyProjects/MyProjects";
import ContactMe from "../pages/ContactMe/ContactMe";
import MainTemplate from "../templates/MainTemplate";
import Context from "../contexts/Context";

const Root = () => {
  const [welcomeSlogan, setWelcomeSlogan] = useState("");
  const [indexTimeout, setIndexTimeout] = useState(0);

  const WelcomeSloganInterval = () => {
    let beginSlogan = "";
    let endSlogan = [
      "Witam na moim portfolio",
      "Nazywam się Mariusz",
      "Jestem Junior Frontend Developerem",
      "Zapraszam do kontaktu",
    ];
    let indexWord = 0;
    let indexLetter = 0;

    let changeWord = () => {
      indexWord++;
      indexLetter = 0;
      indexStart++;
      beginSlogan = "";
      if (indexWord === endSlogan.length - 1) {
        clearInterval(indexChange);
      }
      setInterval(addLetter, 100);
    };

    let indexChange = setInterval(changeWord, 3500);

    const addLetter = () => {
      beginSlogan += endSlogan[indexWord][indexLetter];
      indexLetter++;
      setWelcomeSlogan(beginSlogan);
      if (indexLetter === endSlogan[indexWord].length) {
        clearInterval(indexStart);
      }
    };

    let indexStart = setInterval(addLetter, 100);
  };

  useEffect(() => {
    setIndexTimeout(
      setTimeout(() => {
        WelcomeSloganInterval();
      }, 1)
    );
  }, []);

  const clearHomeInterval = () => {
    clearTimeout(indexTimeout + 1);
    setWelcomeSlogan("Zapraszam do kontaktu");
  };

  return (
    <BrowserRouter>
      <Context.Provider value={{ clearHomeInterval, welcomeSlogan }}>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route exact path={routes.about} component={AboutMe} />
            <Route exact path={routes.projects} component={MyProjects} />
            <Route exact path={routes.contact} component={ContactMe} />
          </Switch>
        </MainTemplate>
      </Context.Provider>
    </BrowserRouter>
  );
};

export default Root;
