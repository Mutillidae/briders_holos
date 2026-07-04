import banner from "../assets/banner.jpg";

function Home() {
  return (

    <section className="home">
      <div className="banner-principal">
        <img src={banner} alt="Banner Principal" />
      </div>

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

      <div className="mensaje">
        <h2>mensaje de bienvenida</h2>
        <p>Contenido de la sección de noticias.</p>
      </div>


    </section>

    
  );
}

export default Home;