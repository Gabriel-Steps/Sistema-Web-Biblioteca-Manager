import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import './global.css';
import PageLivros from "./Pages/PageLivros/PageLivros";
import Cabecalho from "./Pages/Home/Cabecalho/Cabecalho";

function App() {
  return (
    <Router>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paginaLivros" element={<PageLivros />} />
      </Routes>
    </Router>
  );
}

export default App;
