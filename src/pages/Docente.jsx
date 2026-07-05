function Docente() {
  return (
    <section className="page">
      <h2>Docentes</h2>

      <p>
        Nuestro plantel docente está conformado por profesionales altamente
        capacitados y comprometidos con la formación académica y humana de
        nuestros estudiantes.
      </p>

      <div className="docentes-grid">

        <div className="docente-card">
          <img
            src="https://via.placeholder.com/180"
            alt="Docente"
          />

          <h3>Nombre del Docente</h3>

          <p>Matemáticas</p>
        </div>

        <div className="docente-card">
          <img
            src="https://via.placeholder.com/180"
            alt="Docente"
          />

          <h3>Nombre del Docente</h3>

          <p>Lenguaje</p>
        </div>

        <div className="docente-card">
          <img
            src="https://via.placeholder.com/180"
            alt="Docente"
          />

          <h3>Nombre del Docente</h3>

          <p>Ciencias Sociales</p>
        </div>

        <div className="docente-card">
          <img
            src="https://via.placeholder.com/180"
            alt="Docente"
          />

          <h3>Nombre del Docente</h3>

          <p>Educación Física</p>
        </div>

      </div>

    </section>
  );
}

export default Docente;