function Contacto() {
  return (
    <section className="page">
      <h2>Contacto</h2>

    <p>
        Si deseas comunicarte con la Unidad Educativa Carlos Medinaceli,
        puedes completar el siguiente formulario.
    </p>

    <form className="contact-form">

        <div className="form-group">
            <label>Nombre</label>
            <input
            type="text"
            placeholder="Ingrese su nombre"
        />
        </div>

        <div className="form-group">
          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="correo@ejemplo.com"
          />
        </div>

        <div className="form-group">
          <label>Asunto</label>
          <input
            type="text"
            placeholder="Asunto"
          />
        </div>

        <div className="form-group">
          <label>Mensaje</label>

          <textarea
            rows="6"
            placeholder="Escriba su mensaje..."
          ></textarea>
        </div>

        <button className="btn-enviar">
            Enviar
        </button>

      </form>

    </section>
  );
}

export default Contacto;