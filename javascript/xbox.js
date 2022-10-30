const juegosXbox = [
    {
      name: "Fifa",
      price: 59.99,
      genre: ["deportes", "estrategia"],
      platforms: ["xbox", "play"],
      photo: "../imgs/fifa.jpg",
      id: 1,
    },
    {
      name: "Halo",
      price: 49.99,
      genre: ["accion", "disparos"],
      platforms: ["xbox"],
      photo: "../imgs/xbox/halo.jpg",
      id: 2,
    },
    {
      name: "Gears 5",
      price: 29.99,
      genre: ["accion", "disparos"],
      platforms: ["xbox"],
      photo: "../imgs/xbox/gears.jpg",
      id: 3,
    },
    {
      name: "Forza",
      price: 47.99,
      genre: "carreras",
      platforms: ["xbox"],
      photo: "../imgs/xbox/forza.jpg",
      id: 4,
    },
];

const carrito = [];

let contenedor = document.getElementById("productos__xbox");

function renderizarProds(){
    for (const juego of juegosXbox){
        contenedor.innerHTML += `
        <div class="card col-sm 4">
            <img src=${juego.photo} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${juego.name}</h5>
                <h5 class="card-title">$${juego.price}</h5>
                <button class="btn btn-primary" id="btn${juego.id}">Añadir al carrito</button>
            </div>
        </div>
        `;
    }

    //Eventos
    juegosXbox.forEach(juego => {
      document.getElementById(`btn${juego.id}`).addEventListener("click",function(){
          agregarAlCarrito(juego);
      });
    })
}

renderizarProds();


function agregarAlCarrito(juegoComprado){
  carrito.push(juegoComprado);
  console.table(carrito);
  alert("El juego "+juegoComprado.name+" ha sido agregado al carrito");

}
