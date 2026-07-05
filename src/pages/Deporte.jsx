function Deporte() {
  return (
    <section className="page">
      <h2>Deportes</h2>

      <p>
        El Colegio Carlos Medinaceli promueve la práctica deportiva como parte
        de la formación integral de los estudiantes, fomentando el trabajo en
        equipo, la disciplina y el respeto.
      </p>

      <div className="deportes-grid">

        <div className="deporte-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Fútbol"
          />

          <h3>Fútbol</h3>

          <p>
            Participación en campeonatos intercolegiales.
          </p>
        </div>

        <div className="deporte-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Baloncesto"
          />

          <h3>Baloncesto</h3>

          <p>
            Formación deportiva y competencias escolares.
          </p>
        </div>

        <div className="deporte-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Atletismo"
          />

          <h3>Atletismo</h3>

          <p>
            Actividades físicas y eventos deportivos.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Deporte;