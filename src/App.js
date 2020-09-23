import React from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";
import routes from "./routes";

function App() {
  return (
    <Layout>
      <NavBar/>


    </Layout>
  );
}

export default App;
