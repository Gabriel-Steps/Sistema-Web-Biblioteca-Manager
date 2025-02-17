import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import './global.css';
import Cabecalho from "./Pages/Home/Cabecalho/Cabecalho";
import PageSessao from "./Pages/PageLivros/PageSessao";

function App() {
  return (
    <Router>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagina/:tipo" element={<PageSessao />} />
      </Routes>
    </Router>
  );
}

export default App;
