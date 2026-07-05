function Noticia() {
  return (
    <section className="page">
      <h2>Noticias de Oro</h2>

      <p>
        En esta sección encontrarás las noticias, actividades y eventos más
        importantes del Colegio Carlos Medinaceli.
      </p>

      <div className="noticias-grid">

        <article className="noticia-card">

          <img
            src="https://via.placeholder.com/350x200"
            alt="Noticia 1"
          />

          <div className="noticia-info">
            <h3>Inicio de Gestión Escolar</h3>

            <p>
              Se dio inicio a una nueva gestión académica con la participación
              de estudiantes, docentes y padres de familia.
            </p>

            <button>Leer más</button>
          </div>

        </article>

        <article className="noticia-card">

          <img
            src="https://via.placeholder.com/350x200"
            alt="Noticia 2"
          />

          <div className="noticia-info">
            <h3>Campeonato Deportivo</h3>

            <p>
              Nuestros estudiantes participaron en el campeonato
              intercolegial obteniendo excelentes resultados.
            </p>

            <button>Leer más</button>
          </div>

        </article>

        <article className="noticia-card">

          <img
            src="https://via.placeholder.com/350x200"
            alt="Noticia 3"
          />

          <div className="noticia-info">
            <h3>Desfile Cívico</h3>

            <p>
              La Banda Ex Alumnos acompañó los actos conmemorativos
              representando al colegio con orgullo.
            </p>

            <button>Leer más</button>
          </div>

        </article>

      </div>

    </section>
  );
}

export default Noticia;