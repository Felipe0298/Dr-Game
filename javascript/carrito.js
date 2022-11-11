//Traer el array de los otros archivos js
let arrayXbox = JSON.parse(localStorage.getItem("carritoXbox")) || [];
let arrayPlay = JSON.parse(localStorage.getItem("carritoPlay")) || [];

//Juntando la info

let arrayFinalJuegos = arrayXbox.concat(arrayPlay);
let precioActual;

//Verificando si hay info de antes

(arrayFinalJuegos.length != 0)&&mostrarJuegos();

// Dibujar los productos agregados al carrito

function mostrarJuegos(){

    for(const juego of arrayFinalJuegos){
        document.getElementById("tablajuegos").innerHTML += `
        <tr>
                <td><img class="img__carrito" src="${juego.photo}"></td>
                <td class="td__carrito">${juego.name}</td>
                <td class="td__carrito">${juego.platforms}</td>
                <td class="td__carrito"> $${juego.price}</td>
                <td><button class="btn" onclick="eliminar(event)">X</button></td>
            </tr>
        `
    }

    compraTotal = arrayFinalJuegos.reduce((acumulador,juego) => acumulador+juego.price,0);


    let compraTotalFinal = document.getElementById("total");

    compraTotalFinal.innerText = "Total a pagar en USD $: "+compraTotal.toFixed(2);
    
}

function eliminar(ev){
    //Encontrando la fila en la que se genera el evento
    let fila = ev.target.parentElement.parentElement;

    //Encontrando la info necesaria para el findIndex
    let nombre = fila.children[1].innerText;

    //Buscando la info para hacer el match
    let indice = arrayFinalJuegos.findIndex(producto => producto.name == nombre)

    //Eliminar juego del array
    arrayFinalJuegos.splice(indice,1);

    //Eliminar de la fila en la tabla
    fila.remove();

    //Recalculando el nuevo total
    nuevoTotal = arrayFinalJuegos.reduce((acumulador,juego) => acumulador+juego.price,0);

    let nuevaCompraTotal= document.getElementById("total");

    nuevaCompraTotal.innerText = "Total a pagar en USD $: "+ nuevoTotal.toFixed(2);

}

//Eliminar todos los items del carrito

function vaciarCarrito(){
    if(arrayFinalJuegos.length == 0){
        Toastify({  
            text: "No hay productos por eliminar",
            duration: 1500,
            style: {
                background: "rgb(68,4,4)",
                color: "white",
                "font-weight": "bolder", 
            }
        }).showToast();
    }else{
        Swal.fire({
            title: 'Deseas eliminar todos los productos del carrito?',
            text: "Tendras que agregarlos de nuevo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si, borralos!',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminados!',
                    'Los productos han sido eliminados.',
                    'success'
                  )
            arrayFinalJuegos = [],
            localStorage.clear(),
            
            document.getElementById("tablajuegos").innerHTML = "",
            compraTotal=0;
            let compraTotalFinal = document.getElementById("total");
            compraTotalFinal.innerHTML = "Total a pagar $: "+compraTotal.toFixed(2)
            }
          })
    }
}

//Boton comprar

let btnComprar = document.getElementById("completar-compra").addEventListener("click", function(){
    if(arrayFinalJuegos.length !=0){
        arrayFinalJuegos = [],
        localStorage.clear(),
        document.getElementById("tablajuegos").innerHTML = "",
        compraTotal=0,
        compraTotal=0;
        let compraTotalFinal = document.getElementById("total");
        compraTotalFinal.innerHTML = "Total a pagar $: "+compraTotal
            Toastify({  
                text: "Gracias por tu compra" + "\nPronto recibiras mas informacion via email",
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
                color: "white",
                "font-weight": "bolder", 
            }
        }).showToast();
       }
})
