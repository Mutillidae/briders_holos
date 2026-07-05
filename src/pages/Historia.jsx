import historia from "../assets/images/historia/carlos.jpg"

function Historia({setPagina}) {
    return (
    <section className="page">
        <h2>Historia</h2>

        <img src={historia} alt="foto de la historia" className="historia-banner" />

        <div className="historia-texto">

    <p>
        El Colegio Carlos Medinaceli ha contribuido durante muchos años a la
        formación académica y humana de miles de estudiantes, promoviendo la
        excelencia educativa y los valores.
    </p>

    <p>
        mas adelnate carlos medinaceli era un inventor de todas la cosa y 
        creador de la colegio carlos medinaceli
    </p>

    <p>
        A lo largo de su historia, la institución ha participado en actividades
        culturales, deportivas y cívicas que forman parte de su identidad.
    </p>

        </div>
            <h3>Galeria Historia</h3>

    <div className="galeria">
        
        <img src={historia} alt="foto 1" />
        <img src={historia} alt="foto 2" />
        <img src={historia} alt="foto 3" />
        <img src={historia} alt="foto 4" />
        <img src={historia} alt="foto 5" />
        <img src={historia} alt="foto 6" />

    </div>
        
        <button>
            className="btn-volver" onClick={() => setPagina("home")}
            ← Volver al Inicio
        </button>

    
    </section>
  );
}

export default Historia;