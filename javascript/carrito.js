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
            <td><button class="btn btn-primary" id="eliminar__item${juegosCompradosFinal.id}"><i class="bi bi-x-circle-fill"></i></button></td>
        </tr>`;
    
    }
}

actualizarCarrito();


let compraTotal = arrayXbox.reduce((acumulador,juegoComprado) => acumulador + juegoComprado.price,0);

let compraTotalFinal = document.getElementById("total");
compraTotalFinal.innerHTML = "Total a pagar $: "+compraTotal;

const btnVaciar = document.getElementById("vaciar-carrito");
    
btnVaciar.addEventListener("click",() =>{
    arrayXbox = [];
        juegosCompradosFinal = [];
        localStorage.clear();
        
        document.getElementById("tablajuegos").innerHTML = "";
        compraTotal=0;
        document.getElementById("total");
        compraTotalFinal.innerHTML = "Total a pagar $: "+compraTotal;
        
    })




