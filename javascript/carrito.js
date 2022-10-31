let arrayXbox = JSON.parse(localStorage.getItem("carritoXbox"));
/* let arrayPlay = JSON.parse(localStorage.getItem("carritoPlay")); */

/* const arrayCompras = arrayXbox.concat(arrayPlay); */

let juegosCompradosFinal;

function actualizarCarrito(){
    for (juegosCompradosFinal of arrayXbox){
        document.getElementById("tablajuegos").innerHTML += `
        <tr>
            <td>${juegosCompradosFinal.name}</td>
            <td>${juegosCompradosFinal.platforms}</td>
            <td>${juegosCompradosFinal.price}</td>
            <td><button class="btn btn-primary" id="btn eliminar__item${juegosCompradosFinal.id}"><i class="bi bi-x-circle-fill"></i></button></td>
        </tr>`;
    
        
    }
}

actualizarCarrito();

function eliminarJuego (){
    let f = arrayXbox.indexOf(`eliminar__item${juegosCompradosFinal.id}`);
    console.log(f);
        
}

eliminarJuego();


let compraTotal = arrayXbox.reduce((acumulador,juegoComprado) => acumulador + juegoComprado.price,0);

let compraTotalFinal = document.getElementById("total");
compraTotalFinal.innerHTML = "Total a pagar $: "+compraTotal;



