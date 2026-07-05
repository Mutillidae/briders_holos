function Banda() {
  return (
    <section className="page">
      <h2>Banda Ex Alumnos</h2>

    <p>
        La Banda Ex Alumnos representa con orgullo al Colegio Carlos Medinaceli
        en actos cívicos, culturales y eventos especiales, manteniendo viva la
        tradición musical de la institución.
    </p>

      <div className="gallery">
        <div className="gallery-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Banda 1"
          />
          <p>Presentación Oficial</p>
        </div>

        <div className="gallery-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Banda 2"
          />
          <p>Desfile Cívico</p>
        </div>

        <div className="gallery-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Banda 3"
          />
          <p>Concierto</p>
        </div>
      </div>
    </section>
  );
}

export default Banda;