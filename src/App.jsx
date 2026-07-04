import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Historia from "./pages/historia";
import Contacto from "./pages/contacto";
import Banda from "./pages/banda";
import Fraternidad from "./pages/fraternal";
import Promocion from "./pages/promocion";
import Deporte from "./pages/deporte";
import Docente from "./pages/docente";
import Noticia from "./pages/noticia";
import Mapa from "./pages/mapa.";
import Login from "./pages/login";

function App() {
  const [pagina, setPagina] = useState("home");
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
