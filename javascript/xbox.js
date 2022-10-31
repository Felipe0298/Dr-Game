const juegosXbox = [
    {
      name: "Fifa 23",
      price: 59.99,
      genre: ["deportes", "estrategia"],
      platforms: "Xbox",
      photo: "../imgs/fifa.jpg",
      id: 1,
    },
    {
      name: "Halo Infinite",
      price: 49.99,
      genre: ["accion", "disparos"],
      platforms: "Xbox",
      photo: "../imgs/xbox/halo.jpg",
      id: 2,
    },
    {
      name: "Gears 5",
      price: 29.99,
      genre: ["accion", "disparos"],
      platforms: "Xbox",
      photo: "../imgs/xbox/gears.jpg",
      id: 3,
    },
    {
      name: "Forza Horizon 4",
      price: 14.99,
      genre: "carreras",
      platforms: "Xbox",
      photo: "../imgs/xbox/forza.jpg",
      id: 4,
    },
    {
      name: "Gears of War: Ultimate Edition",
      price: 17.99,
      genre: ["accion", "disparos"],
      platforms: "Xbox",
      photo: "../imgs/xbox/gearsUE.jpg",
      id: 5,
    },
    {
      name: "Need for Speed Unbound",
      price: 47.99,
      genre: "carreras",
      platforms: "Xbox",
      photo: "../imgs/juegos-Compartidos/nfs-unbound.png",
      id: 6,
    },
    {
      name: "Forza Horizon 5",
      price: 47.99,
      genre: "carreras",
      platforms: "Xbox",
      photo: "../imgs/xbox/forza5.jpg",
      id: 7,
    },
    {
      name: "Gears of War 4",
      price: 7.99,
      genre: ["accion", "disparos"],
      platforms: "Xbox",
      photo: "../imgs/xbox/gears4.jpg",
      id: 8,
    },
    {
      name: "Halo 5",
      price: 16.99,
      genre: ["accion", "disparos"],
      platforms: "Xbox",
      photo: "../imgs/xbox/halo5.jpg",
      id: 9,
    },
    {
      name: "Halo: The Master Chief Collection",
      price: 47.99,
      genre: ["accion", "disparos"],
      platforms: "Xbox",
      photo: "../imgs/xbox/halo-MCC.jpg",
      id: 10,
    },
    {
      name: "Assassin's Creed Valhalla",
      price: 34.99,
      genre: "Aventura",
      platforms: "Xbox",
      photo: "../imgs/juegos-Compartidos/assasins-valhalla.jpg",
      id: 11,
    },
    {
      name: "Assassin's Creed Odyssey",
      price: 24.99,
      genre: "Aventura",
      platforms: "Xbox",
      photo: "../imgs/juegos-Compartidos/assasins-odessy.png",
      id: 12,
    },
];

const carritoXbox = [];

let contenedor = document.getElementById("productos__xbox");

function renderizarProds(){
    for (const juego of juegosXbox){
        contenedor.innerHTML += `
        <div class="card col-sm-3" id ="juego_Xbox">
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
  carritoXbox.push(juegoComprado);
  console.table(carritoXbox);
  alert("El juego "+juegoComprado.name+" ha sido agregado al carrito");

  localStorage.setItem("carritoXbox",JSON.stringify(carritoXbox));

}


document.addEventListener("keyup", e => {

  if (e.target.matches("#buscador")) {

    
    document.querySelectorAll("#juego_Xbox").forEach(juegosFiltradosXbox => {
      juegosFiltradosXbox.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
      ?juegosFiltradosXbox.classList.remove("filtro")

      :juegosFiltradosXbox.classList.add("filtro")
    })
  }
  
  
})
