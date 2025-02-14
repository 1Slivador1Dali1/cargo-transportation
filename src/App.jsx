import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import CardDetails from "./pages/CardDetails/CardDetails.jsx";
import "./styles/main.scss";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
