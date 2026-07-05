function Historia({setPagina}) {
    return (
    <section className="page">
        <h2>Historia del Colegio Carlos Medinaceli</h2>

    <p>
        El Colegio Carlos Medinaceli ha contribuido durante muchos años a la
        formación académica y humana de miles de estudiantes, promoviendo la
        excelencia educativa y los valores.
    </p>

    <p>
        A lo largo de su historia, la institución ha participado en actividades
        culturales, deportivas y cívicas que forman parte de su identidad.
    </p>

    <div className="imagen-page">
        <img
            src="https://via.placeholder.com/700x350?text=Historia+del+Colegio"
            alt="Historia del Colegio"
        />

        <button>
            className="btn-volver" onClick={() => setPagina("home")}
            ← Volver al Inicio
        </button>

    </div>
    </section>
  );
}

export default Historia;