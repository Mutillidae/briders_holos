import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar />
      </aside>

      <main className="content">
        <h2>Bienvenidos</h2>

        <p>
          Bienvenido al portal oficial de la Unidad Educativa
          Carlos Medinaceli.
        </p>

        <p>
          Aquí encontrarás información sobre la historia,
          promociones, deportes, docentes y mucho más.
        </p>
      </main>

      <aside className="rightbar">
        <h3>EX ALUMNOS</h3>

        <img
          src="/images/exalumnos.jpg"
          alt="Ex Alumnos"
          className="right-image"
        />

        <p>
          Comunidad de Ex Alumnos Medinaceli.
        </p>
      </aside>
    </div>
  );
}

export default Layout;