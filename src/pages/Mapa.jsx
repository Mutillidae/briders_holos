function Mapa() {
return (
    <section className="page">
        <h2>Mapa Satelital</h2>

    <p>
        Ubicación de la Unidad Educativa Carlos Medinaceli.
    </p>

    <div className="mapa-container">
        <iframe
            title="Mapa del Colegio"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.583350939052!2d-68.119293!3d-16.500215"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
        ></iframe>
    </div>
    </section>
    );
}

export default Mapa;