let arrayXbox = JSON.parse(localStorage.getItem("carritoXbox"));
let arrayPlay = JSON.parse(localStorage.getItem("carritoPlay"));

const arrayCompras = arrayXbox.concat(arrayPlay);

for (let juegosCompradosFinal of arrayCompras){
    document.getElementById("tablajuegos").innerHTML += `
    <tr>
        <td>${juegosCompradosFinal.name}</td>
        <td>${juegosCompradosFinal.platforms}</td>
        <td>${juegosCompradosFinal.price}</td>
        <td><button class="btn btn-primary" id="btn eliminar__item${juegosCompradosFinal.id}"><i class="bi bi-x-circle-fill"></i></button></td>
    </tr>`;

    
}


let compraTotal = arrayCompras.reduce((acumulador,juegoComprado) => acumulador + juegoComprado.price,0);
let compraTotalFinal = document.getElementById("total");
compraTotalFinal.innerHTML = "Total a pagar $: "+compraTotal;


/* const indexOfObject = arrayCompras.findIndex(object => {
  return object.id === document.getElementById(`eliminar__item${juegosCompradosFinal.id}`);
});

function eliminarJuegoArray(){
    arrayCompras.forEach(juegosCompradosFinal => {
        document.getElementById(`eliminar__item${juegosCompradosFinal.id}`).addEventListener("click",function(){
            eliminarJuego(indexOfObject);
        })
    });
}

eliminarJuegoArray(indexOfObject);


function eliminarJuego(indexOfObject){
    arrayCompras.splice(indexOfObject);

} */

