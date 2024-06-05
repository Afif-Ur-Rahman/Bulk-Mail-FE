/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./approutes/AppRoutes";

import {Header} from "./components";
import { AllContextsProvider } from "./context";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({ _id: "", name: "", email: "", image: "" });
  return (
    <BrowserRouter>
      <AllContextsProvider value={{ user, setUser }}>
        <Header />
        <AppRoutes />
      </AllContextsProvider>
    </BrowserRouter>
  );
};

export default App;
