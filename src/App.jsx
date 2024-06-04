/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./approutes/AppRoutes";

import Header from "./components/header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
