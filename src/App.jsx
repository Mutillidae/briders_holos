import { useState } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";


import Home from "./pages/Home.jsx";
import Historia from "./pages/Historia.jsx";
import Contacto from "./pages/Contacto.jsx";
import Banda from "./pages/Banda.jsx";
import Fraternidad from "./pages/Fraternidad.jsx";
import Promocion from "./pages/Promocion.jsx";
import Deporte from "./pages/Deporte.jsx";
import Docente from "./pages/Docente.jsx";
import Noticia from "./pages/Noticia.jsx";
import Mapa from "./pages/Mapa.jsx";
import Login from "./pages/Login.jsx";

const titulos = {
  home: "Inicio",
  historia: "Historia",
  contacto: "Contacto",
  banda: "Banda Ex Alumnos",
  suris: "Fraternidad Suris",
  promociones: "Promociones",
  deportes: "Deportes",
  docentes: "Docentes",
  noticias: "Noticias de Oro",
  mapa: "Mapa Satelital",
  login: "Iniciar Sesión",
}

function App() {
  const [pagina, setPagina] = useState("home");
  const [entrar, setEntrar] = useState(false);

  if (!entrar) {
  return (
    <div className="welcome">

      <img src="../src/assets/images/historia/medi.jpg" alt="escudo de colegio" className="welcome-logo" />
      <h2>BIENVENIDOS!!!</h2>

      <h1>COLEGIO CARLOS MEDINACELI</h1>

      <p>
          Honor • Disciplina • Deporte
          ADELANTE MEDINACELI!!!
      </p>

      <button
        className="btn-entrar"
        onClick={() => setEntrar(true)}
      >
        Entrar
      </button>

      <footer className="footer-app"> 
      <h3>
        Copyright ©  Yerkov Laime M Todos los derechos reservados.
      </h3>
          
      </footer>

    </div>
  );
}

  return (
    <div className="app">

      <Header />

      <div className="contenedor">

        <Sidebar 
        pagina={pagina}
        setPagina={setPagina}
        />

        <main className="contenido">
          
          <div className="titulo-pagina">
            <h2>{titulos[pagina]}</h2>
          </div>
          
          <div className="contenido-cards">
          {pagina === "home" && <Home />}
          {pagina === "historia" && <Historia />}
          {pagina === "contacto" && <Contacto />}
          {pagina === "banda" && <Banda />}
          {pagina === "fraternidad" && <Fraternidad />}
          {pagina === "promocion" && <Promocion />}
          {pagina === "deporte" && <Deporte />}
          {pagina === "docente" && <Docente />}
          {pagina === "noticia" && <Noticia />}|
          {pagina === "mapa" && <Mapa />}
          {pagina === "login" && <Login />}
          </div>
        </main>

      </div>

      <Footer />

    </div>
  );
}

export default App;
