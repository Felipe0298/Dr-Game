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

    Swal.fire({
        title: 'Deseas eliminar todos los productos del carrito?',
        text: "Tendras que agregarlos de nuevo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borralos!',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminados!',
                'Los productos han sido eliminados.',
                'success'
              )
        arrayXbox = [],
        juegosCompradosFinal = [],
        localStorage.clear(),
        
        document.getElementById("tablajuegos").innerHTML = "",
        compraTotal=0,
        document.getElementById("total"),
        compraTotalFinal.innerHTML = "Total a pagar $: "+compraTotal
        }
      })
        
    })


    /* Boton de comprar */
const btn2 = document.getElementById("completar-compra").addEventListener("click",function(){
    finalizarCompra(arrayXbox);
})
    
function finalizarCompra(arrayXbox){
    if(arrayXbox.length !=0){
         
            Toastify({  
                text: "Gracias por tu compra",
                duration: 1500,
                style: {
                    background: "rgb(134,144,150)",
                    background: "linear-gradient(90deg, rgba(134,144,150,1) 33%, rgba(231,69,252,1) 80%)",
                    color: "blue",
                    "font-weight": "bolder", 
                }
            }).showToast();
        
       }
       else{
        Toastify({  
            text: "Recuerda agregar productos",
            duration: 1500,
            style: {
                background: "rgb(68,4,4)",
                /* background: "linear-gradient(90deg, rgba(134,144,150,1) 33%, rgba(231,69,252,1) 80%)", */
                color: "white",
                "font-weight": "bolder", 
            }
        }).showToast();
       }
}
