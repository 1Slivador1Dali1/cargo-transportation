import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import CardDetails from "./pages/CardDetails/CardDetails.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardDetails />} />
      </Routes>
    </>
  );
}

export default App;
