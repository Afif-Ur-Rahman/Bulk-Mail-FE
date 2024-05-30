import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Signup, Login, Home } from "./components/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
