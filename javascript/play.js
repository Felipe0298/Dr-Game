const juegosPlay = [
  {
    name: "Fifa 23",
    price: 59.99,
    genre: ["deportes", "estrategia"],
    platforms: ["Play"],
    photo: "../imgs/fifa.jpg",
    id: 13,
  },
  {
    name: "God of War Ragnarok",
    price: 69.99,
    genre: ["accion" , "aventura"],
    platforms: ["Play"],
    photo: "../imgs/play/juegos_play/god-of-war-rag.jpg ",
    id: 14,
  },
  {
    name: "The Last of Us 2",
    price: 49.99,
    genre: ["accion", "estrategia"],
    platforms: ["Play"],
    photo: "../imgs/play/juegos_play/the-last-of-us-part-2.jpg",
    id: 15,
  },
  {
    name: "God of War 4",
    price: 19.99,
    genre: ["accion", "aventura"],
    platforms: ["Play"],
    photo: "../imgs/play/juegos_play/god-of-war.jpg",
    id: 16,
  },
  {
    name: "The Last of Us",
    price: 9.99,
    genre: ["accion", "estrategia"],
    platforms: ["Play"],
    photo: "../imgs/play/juegos_play/the-last-of-us.jpg",
    id: 17,
  },
  {
    name: "Horizon Zero Dawn",
    price: 19.99,
    genre: ["accion", "estrategia"],
    platforms: ["Play"],
    photo: "../imgs/play/juegos_play/horizon.jpg",
    id: 18,
  },
  {
    name: "Horizon Zero Dawn: Forbidden West",
    price: 49.99,
    genre: ["accion", "estrategia"],
    platforms: ["Play"],
    photo: "../imgs/play/juegos_play/horizon2.jpg",
    id: 19,
  },
  {
    name: "Need for Speed Unbound",
    price: 57.99,
    genre: "carreras",
    platforms: ["Play"],
    photo: "../imgs/juegos-Compartidos/nfs-unbound.png",
    id: 20,
  },
  {
    name: "Marvel's Spider-Man Remastered",
    price: 54.99,
    genre: "Aventura",
    platforms: ["Play"],
    photo: "../imgs/play/juegos_play/spiderman-remastered.jpg",
    id: 21,
  },
  {
    name: "Marvel's Spider-Man Miles Morales",
    price: 34.99,
    genre: "Aventura",
    platforms: ["Play"],
    photo: "../imgs/play/juegos_play/spiderman-miles.jpg",
    id: 22,
  },
  {
    name: "Assassin's Creed Valhalla",
    price: 44.99,
    genre: "Aventura",
    platforms: ["Play"],
    photo: "../imgs/juegos-Compartidos/assasins-valhalla.jpg",
    id: 23,
  },
  {
    name: "Assassin's Creed Odyssey",
    price: 24.99,
    genre: "Aventura",
    platforms: ["Play"],
    photo: "../imgs/juegos-Compartidos/assasins-odessy.png",
    id: 24,
  },
];

const carritoPlay = [];

let contenedor2 = document.getElementById("productos__play");

function renderizarProds2() {
  for (const juego2 of juegosPlay){
    contenedor2.innerHTML += `
    <div class="card col-sm-3" id ="juego_Play">
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
  carritoPlay.push(juegoComprado2);
  console.table(carritoPlay);
  alert("El juego " + juegoComprado2.name + " ha sido agregado al carrito");

  localStorage.setItem("carritoPlay",JSON.stringify(carritoPlay));
}


document.addEventListener("keyup", e => {

  if (e.target.matches("#buscador")) {

    
    document.querySelectorAll("#juego_Play").forEach(juegosFiltradosPlay => {
      juegosFiltradosPlay.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
      ?juegosFiltradosPlay.classList.remove("filtro")

      :juegosFiltradosPlay.classList.add("filtro")
    })
  }
  
  
})