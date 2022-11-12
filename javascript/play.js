let juegosPlay = [];
let precioActual;
obtenerDolar()
const carritoPlay = [];

let contenedor2 = document.getElementById("productos__play");

function renderizarProds2() {
  for (const juego2 of juegosPlay){
    contenedor2.innerHTML += `
    <div class="card col-sm-3" id ="juego_Play">
        <img src=${juego2.photo} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${juego2.name}</h5>
            <h5 class="card-title">Cop:$${(juego2.price*precioActual).toFixed(2)}<br>USD:$${juego2.price}</h5>
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
  
  
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-start',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: juegoComprado2.name+" ha sido añadido al carrito",
  })

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

function obtenerDolar(){
  const urlDolar = "http://www.floatrates.com/daily/cop.json";
  fetch(urlDolar)
      .then( respuesta => respuesta.json())
      .then( cotizaciones => {
          const precioDolar = cotizaciones.usd;
          precioActual = precioDolar.inverseRate;
          console.log(precioActual);
          obtenerJSON()
      })
}

async function obtenerJSON(){
  const JUEGOSPLAY ="../play.json";
  const resp = await fetch(JUEGOSPLAY);
  const data = await resp.json();
  juegosPlay = data;
  //Tengo USD, items, sigue renderizar las cards llamando a la funcion
  renderizarProds2()
}