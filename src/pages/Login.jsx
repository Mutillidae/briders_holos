import { useState } from "react";

function Login() {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [mostrar, setMostrar] = useState(false);

    const ingresar = (e) => {
    e.preventDefault();

    if (usuario === "" || password === "") {
        alert("Complete todos los campos.");
        return;
    }

    alert("Inicio de sesión de demostración.");
    };

return (
    <section className="page">

        <h2>Iniciar Sesión</h2>

        <form className="login-form" onSubmit={ingresar}>

        <div className="form-group">
            <label>Usuario</label>

        <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Ingrese su usuario"
        />
        </div>

        <div className="form-group">
            <label>Contraseña</label>

        <input
            type={mostrar ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
        />
        </div>

        <div className="mostrar-password">

        <input
            type="checkbox"
            id="mostrar"
            checked={mostrar}
            onChange={() => setMostrar(!mostrar)}
        />

        <label htmlFor="mostrar">
            Mostrar contraseña
        </label>

        </div>

        <button type="submit" className="btn-login">
            Ingresar
        </button>

    </form>

    </section>
    );
}

export default Login;