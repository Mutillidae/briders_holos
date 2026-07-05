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


function Sidebar({ setPagina }) {
  
  
  
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">MENU PRINCIPAL</h2>

      {menu.map((item) => (
        <button key={item.id}className={`menu-btn ${"pagina" === item.id ? "activo" : ""}`}onClick={() => setPagina(item.id)}>
          {item.nombre}
        </button>
      ))}

      

    </aside>
  );
}

export default Sidebar;