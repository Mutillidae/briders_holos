import "app.css";
import escudo from "assets/images/escudo.png";
import tigre from "assets/images/tigre.png";

function Header() {
  return (
    <header className="header">

      <div className="header-left">
        <img src={escudo} alt="Escudo de colegio" />
      </div>

      <div className="header-center">
        <h1>COLEGIO CARLOS MEDINACELI</h1>
        <h3>UNIDAD EDUCATIVA</h3>
        <p>"Educación • Disciplina • Valores"</p>
      </div>

      <div className="header-right">
        <img src={tigre} alt="Tigre del colegio" />
      </div>

    </header>
  );
}

export default Header;