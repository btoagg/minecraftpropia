// Datos de los minerales
const minerales = [
  {
    nombre: "Diamante",
    descripcion: "El mineral más valioso, usado para herramientas y armaduras avanzadas.",
    imagen: "imagenes/diamond.png",
  },
  {
    nombre: "Hierro",
    descripcion: "Muy útil para herramientas y armaduras de nivel intermedio.",
    imagen: "imagenes/iron.png",
  },
  {
    nombre: "Oro",
    descripcion: "Se utiliza para herramientas, relojes y decoración.",
    imagen: "imagenes/gold.png",
  },
  {
    nombre: "Carbón",
    descripcion: "Fundamental para crear antorchas y como combustible.",
    imagen: "imagenes/coal.png",
  },
  {
    nombre: "Redstone",
    descripcion: "Ideal para circuitos y mecanismos.",
    imagen: "imagenes/redstone.png",
  },
];

// Función para generar el carrusel
function renderCarrusel() {
  const carouselItems = document.getElementById("carousel-items");

  minerales.forEach((mineral, index) => {
    const item = document.createElement("div");
    item.className = `carousel-item ${index === 0 ? "active" : ""}`;

    item.innerHTML = `
      <img src="${mineral.imagen}" class="d-block w-100" alt="${mineral.nombre}">
      <div class="carousel-caption d-none d-md-block">
        <h5>${mineral.nombre}</h5>
        <p>${mineral.descripcion}</p>
      </div>
    `;

    carouselItems.appendChild(item);
  });
}

// Inicializar el carrusel
renderCarrusel();
