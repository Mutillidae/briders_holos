function Fraternidad() {
  return (
    <section className="page">
      <h2>Fraternidad Suris</h2>

      <p>
        La Fraternidad Suris forma parte de las actividades culturales del
        Colegio Carlos Medinaceli, promoviendo el compañerismo, la identidad y
        la participación de los estudiantes en eventos artísticos y folclóricos.
      </p>

      <div className="gallery">

        <div className="gallery-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Suris 1"
          />
          <p>Presentación Cultural</p>
        </div>

        <div className="gallery-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Suris 2"
          />
          <p>Entrada Folclórica</p>
        </div>

        <div className="gallery-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Suris 3"
          />
          <p>Aniversario del Colegio</p>
        </div>

      </div>
    </section>
  );
}

export default Fraternidad;