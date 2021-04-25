import React from "react";
import { Route, Switch } from "react-router-dom";
import Books from "../pages/Books";
import Drama from "../pages/Drama";
import Films from "../pages/Films";
import Home from "../pages/Home";
import Podcast from "../pages/Podcast";
import ShortFilms from "../pages/Short-films";
import Songs from "../pages/Songs";
import Users from "../pages/Users";

const PrimaryRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/drama" component={Drama} />
      <Route exact path="/films" component={Films} />
      <Route exact path="/podcasts" component={Podcast} />
      <Route exact path="/short/films" component={ShortFilms} />
      <Route exact path="/songs" component={Songs} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/books" component={Books} />
    </Switch>
  );
};

export default PrimaryRoutes;
