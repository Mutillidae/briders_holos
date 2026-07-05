
import Carousel from "../components/Carousel";
function Home() {
  return (

    <section className="home">
      
      <Carousel />

      <section className="home-noticias">
        <h2>Ultimas Noticias</h2>
        
      <div className="noticia-home">
          <img src="" alt="noticia 1" />

        <div>
          <h3>Inicio de la Gestión Escolar</h3>

      <small>04 de julio de 2026</small>

      <p>
        Se dio inicio a una nueva gestión académica con la
        participación de estudiantes, docentes y padres de familia.
      </p>
        </div>
      </div>
      
      <div className="noticia-home">
              <img src="" alt="noticia 2" />

          <div>

            <h3>camponas del deporte</h3>3
            <small>28 de junio de 2028</small>
            <p>
        Nuestros estudiantes participaron en el campeonato
        intercolegial con excelentes resultados.
            </p>

          </div>     
      </div>

          
          
      <div className="noticia-home">
        <img src="" alt="noticia 3" />

        <div>
          <h3>Desfile Cívico</h3>
          <small>15 de junio de 2026</small>
          <p>
              La Banda Ex Alumnos acompañó los actos cívicos
              representando al colegio.
          </p>
        </div>
      </div>

      </section>

      <div className="bienvenida">
        <h2>Bienvenidos</h2>
        <p>
          Bienvenido al sitio web del Colegio Carlos Medinaceli.
        </p>
      </div>

      <div className="home-grid">
        <div className="home-card">
          <h3>Historia</h3>
          <p>comoce la historia de nuestra institucion de su trabajo de medicina</p>
        </div>
        <div className="home-card">
          <h3>Misión</h3>
          <p>Contenido de la tarjeta 2.</p>
        </div>|

        <div className="home-card">
          <h3>Visión</h3>
          <p>formacion de instituciones de salud</p>
        </div>
      </div>

  


    </section>

    
  );
}

export default Home;