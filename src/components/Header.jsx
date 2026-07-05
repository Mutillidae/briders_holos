import { useEffect, useState } from "react";
import banner from "../assets/images/banner/banner.png"

function Header() {
  const [fechaHora, setFechaHora] = useState("");

  useEffect(() => {
    const actualizarHora = () => {
      const ahora = new Date();

      const fecha = ahora.toLocaleDateString("es-BO", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
      });

      const hora = ahora.toLocaleTimeString("es-BO");

      setFechaHora(`${fecha} | ${hora}`);
    };

    actualizarHora();

    const intervalo = setInterval(actualizarHora, 1000);

    return () => clearInterval(intervalo);
  }, []);
  
  return (
    <header className="header">

      <div className="header-logo">
        
      </div>

      <div className="header-info">
        <p>"Educación • Disciplina • Valores"</p>
        <span>{fechaHora}</span>
          <img src={banner} alt="banner de colegio" />
      </div>

      <div className="header-right">
        
      </div>

    </header>
  );
}

export default Header;