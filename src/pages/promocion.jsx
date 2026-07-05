
function Promocion() {
  return (
    <section className="page">
      <h2>Promocion</h2>

      <p>
        En esta sección encontrarás información sobre las promociones del
        Colegio Carlos Medinaceli.
      </p>

      <div className="promocion">

        <div className="promo-card">
          <h3>Promoción 2026</h3>

          <p>
            Última promoción graduada del colegio.
          </p>

          <button>Ver más</button>
        </div>

        <div className="promo-card">
          <h3>Promoción 2025</h3>

          <p>
            Recuerdos y fotografías de la promoción.
          </p>

          <button>Ver más</button>
        </div>

        <div className="promo-card">
          <h3>Promoción 2024</h3>

          <p>
            Actividades y eventos realizados.
          </p>

          <button>Ver más</button>
        </div>

      </div>

    </section>
  );
}

export default Promocion;