import React, {lazy, Suspense} from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";
import routes from "./routes";

const AsyncHomePage = lazy(() => import("./views/HomePage/HomePage"));
const AsyncMoviesPage = lazy(() => import("./views/MoviesPage/MoviesPage"));
const AsyncMovieDetailsPage = lazy(() => import("./views/MovieDetailsPage/MovieDetailsPage"));

function App() {
  return (
    <Layout>
      <NavBar/>
      <Suspense fallback={<h2>Loading</h2>}>
        <Switch>
          <Route path={routes.home} exact component={AsyncHomePage}/>
          <Route path={routes.movies} exact component={AsyncMoviesPage}/>
          <Route path={routes.movieDetails} component={AsyncMovieDetailsPage}/>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
