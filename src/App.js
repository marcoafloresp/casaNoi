import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./pages/Header";
import Inicio from "./pages/Inicio";
import Almohadones from "./pages/Almohadones";
import Alfombras from "./pages/Alfombras";
import Bags from "./pages/Bags";
import Otros from "./pages/Otros";
import Footer from "./pages/Footer";
import "./App.css";
import Almohadonesxl from "./pages/Almohadonesxl";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Almohadones" element={<Almohadones />} />
        <Route path="/Almohadonesxl" element={<Almohadonesxl />} />
        <Route path="/Alfombras" element={<Alfombras />} />
        <Route path="/Bags" element={<Bags />} />
        <Route path="/Otros" element={<Otros />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
