import { useEffect, useState } from "react";

import banner1 from "../assets/images/banner/colegio.jpg";
import banner2 from "../assets/images/banner/BANDA.png";
import banner3 from "../assets/images/banner/himno.png";

function Carousel() {
  const imagenes = [banner1, banner2, banner3];

  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    if (pausado) return;

    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagenes.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, [pausado, imagenes.length]);

    const siguiente = () => {
    setIndice((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndice((prev) =>
      prev === 0 ? imagenes.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
    >
      <img
        src={imagenes[indice]}
        alt={`Banner ${indice + 1}`}
        className="carousel-image"
      />

      <button className="btn-prev" onClick={anterior}>
        ❮
      </button>

      <button className="btn-next" onClick={siguiente}>
        ❯
      </button>

      <div className="indicadores">
        {imagenes.map((_, i) => (
          <span
            key={i}
            className={indice === i ? "dot activo" : "dot"}
            onClick={() => setIndice(i)}
          ></span>
        ))}
      </div>
    </div>
  );
} 



export default Carousel;