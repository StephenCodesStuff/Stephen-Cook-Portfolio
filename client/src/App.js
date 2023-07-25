import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import RenderPortfolio from "./components/RenderPortfolioContainer";

const App = () => (
  <Router>
    <RenderPortfolio />
  </Router>
);

export default App;