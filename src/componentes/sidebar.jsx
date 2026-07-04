function Sidebar({ setPagina }) {
  
  const menu = [
    { id: "home", nombre: "🏠 Inicio" },
    { id: "historia", nombre: "📖 Historia" },
    { id: "contacto", nombre: "📞 Contacto" },
    { id: "banda", nombre: "🎺 Banda Ex Alumnos" },
    { id: "suris", nombre: "🪶 Fraternidad Suris" },
    { id: "promociones", nombre: "🎓 Promociones" },
    { id: "deportes", nombre: "⚽ Deportes" },
    { id: "docentes", nombre: "👨‍🏫 Docentes" },
    { id: "noticias", nombre: "📰 Noticias de Oro" },
    { id: "mapa", nombre: "🗺️ Mapa Satelital" },
    { id: "login", nombre: "🔑 Login" },
  ];
  
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">MENU PRINCIPAL</h2>

      {menu.map((item) => (
        <button key={item.id}className={`menu-btn ${"pagina" === item.id ? "activo" : ""}`}onClick={() => setPagina(item.id)}>
          {item.nombre}
        </button>
      ))}

      <button onClick={() => setPagina("home")} className="menu-btn">
        Inicio
      </button>

      <button onClick={() => setPagina("historia")} className="menu-btn">
        Historia
      </button>

      <button onClick={() => setPagina("contacto")} className="menu-btn">
        Contacto
      </button>

      <button onClick={() => setPagina("banda")} className="menu-btn">
        Banda
      </button>

      <button onClick={() => setPagina("suris")} className="menu-btn">
        Fraternidad Suris
      </button>

      <button onClick={() => setPagina("promociones")}>
        Promociones
      </button>

      <button onClick={() => setPagina("deportes")}>
        Deportes
      </button>

      <button onClick={() => setPagina("noticias")}>
        Noticias
      </button>

      <button onClick={() => setPagina("docentes")}>
        Docentes
      </button>

      <button onClick={() => setPagina("mapa")}>
        Mapa
      </button>

      <button onClick={() => setPagina("login")}>
        Login
      </button>

    </aside>
  );
}

export default Sidebar;