let arrayXbox = JSON.parse(localStorage.getItem("carritoXbox"));

let juegosCompradosFinal;

function actualizarCarrito(){
    for (juegosCompradosFinal of arrayXbox){
        document.getElementById("tablajuegos")  .innerHTML += `
        <tr>
            <td>${juegosCompradosFinal.name}</td>
            <td>${juegosCompradosFinal.genre}</td>
            <td>${juegosCompradosFinal.price}</td>
        </tr>`;
    
    }
}

actualizarCarrito();

/* Suna de los precios */
let compraTotal = arrayXbox.reduce((acumulador,juegoComprado) => acumulador + juegoComprado.price,0);

let compraTotalFinal = document.getElementById("total");
compraTotalFinal.innerHTML = "Total a pagar $: "+compraTotal;

/* Para vaciar todos los elementos del carrito
 */
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


    /* Boton de comprar */
const btn2 = document.getElementById("completar-compra").addEventListener("click",function(){
    finalizarCompra(arrayXbox);
})
    
function finalizarCompra(arrayXbox){
    if(arrayXbox.length !=0){
        alert("Gracias por tu compra")
       }
       else{
          alert("Recuerda agregar productos")
       }
}


