const juegosPlay = [
  {
    name: "Fifa",
    price: 59.99,
    genre: ["deportes", "estrategia"],
    platforms: ["xbox", "play"],
    photo: "../imgs/fifa.jpg",
    id: 1,
  },
  {
    name: "God of War",
    price: 39.99,
    genre: ["accion"],
    platforms: ["play"],
    photo: "../imgs/play/juegos_play/god-of-war.jpg",
    id: 5,
  },
  {
    name: "The last of us 2",
    price: 49.99,
    genre: ["accion", "estrategia"],
    platforms: ["play"],
    photo: "../imgs/play/juegos_play/the-last-of-us-part-2.jpg",
    id: 6,
  },
  {
    name: "Shadow of colossus",
    price: 49.99,
    genre: ["accion", "aventura"],
    platforms: ["play"],
    photo: "../imgs/play/juegos_play/shadow-of-colossus.jpg",
    id: 7,
  },
];

const carrito2 = [];

let contenedor2 = document.getElementById("productos__play");

function renderizarProds2() {
  for (const juego2 of juegosPlay) {
    contenedor2.innerHTML += `<div class="card col-sm 4">
        <img src=${juego2.photo} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${juego2.name}</h5>
            <h5 class="card-title">$${juego2.price}</h5>
            <button class="btn btn-primary" id="btn${juego2.id}">Añadir al carrito</button>
        </div>
    </div>
    `;
  }

  //Eventos

  juegosPlay.forEach((juego2) => {
    document
      .getElementById(`btn${juego2.id}`)
      .addEventListener("click", function () {
        agregarAlCarrito2(juego2);
      });
  });
}

renderizarProds2();

function agregarAlCarrito2(juegoComprado2) {
  carrito2.push(juegoComprado2);
  console.table(carrito2);
  alert("El juego " + juegoComprado2.name + " ha sido agregado al carrito");
}
