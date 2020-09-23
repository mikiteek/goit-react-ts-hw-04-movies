import React from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./views/HomePage/HomePage";
import MoviesPage from "./views/MoviesPage/MoviesPage";
import routes from "./routes";

function App() {
  return (
    <Layout>
      <NavBar/>

      <Switch>
        <Route path={routes.home} exact component={HomePage}/>
        <Route path={routes.movies} component={MoviesPage}/>
      </Switch>
    </Layout>
  );
}

export default App;
