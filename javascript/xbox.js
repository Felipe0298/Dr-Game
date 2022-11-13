let juegosXbox = [];
let precioActual;
obtenerDolar()
const carritoXbox = [];

let contenedor = document.getElementById("productos__xbox");

function renderizarProds(){
    for (const juego of juegosXbox){
        contenedor.innerHTML += `
        <div class="card col-sm-12" id ="juego_Xbox">
            <img src=${juego.photo} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${juego.name}</h5>
                <h5 class="card-title">Cop:$${(juego.price*precioActual).toFixed(2)}<br>USD:$${juego.price}</h5>
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
    title: juegoComprado.name+" ha sido añadido al carrito",
  })

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
  const JUEGOSXBOX ="../json/xbox.json";
  const resp = await fetch(JUEGOSXBOX);
  const data = await resp.json();
  juegosXbox = data;
  //Tengo USD, items, sigue renderizar las cards llamando a la funcion
  renderizarProds()
}
