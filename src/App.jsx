// App.js
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./approutes/AppRoutes";
import { Header } from "./components";
import { AllContextsProvider } from "./context/AllContext";

const App = () => {
  return (
    <BrowserRouter>
      <AllContextsProvider>
        <Header />
        <AppRoutes />
      </AllContextsProvider>
    </BrowserRouter>
  );
};

export default App;
