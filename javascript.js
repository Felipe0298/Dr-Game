const juegos = [
  {
    name: "Fifa",
    price: 59.99,
    genre: ["deportes", "estrategia"],
    platforms: ["xbox", "play"],
    id: 1,
  },
  {
    name: "Halo",
    price: 49.99,
    genre: ["accion", "disparos"],
    platforms: ["xbox"],
    id: 2,
  },
  {
    name: "Gears 5",
    price: 29.99,
    genre: ["accion", "disparos"],
    platforms: ["xbox"],
    id: 3,
  },
  {
    name: "Forza",
    price: 47.99,
    genre: "carreras",
    platforms: ["xbox"],
    id: 4,
  },
  {
    name: "God of War",
    price: 39.99,
    genre: ["accion"],
    platforms: ["play"],
    id: 5,
  },
  {
    name: "The last of us 2",
    price: 49.99,
    genre: ["accion", "estrategia"],
    platforms: ["play"],
    id: 6,
  },
  {
    name: "Shadow of colossus",
    price: 49.99,
    genre: ["accion", "aventura"],
    platforms: ["play"],
    id: 7,
  },
];

alert("Bienvenido a Dr Game");
alert(
  "Acá podrás comprar los juegos de tus consolas favoritas, Xbox, Play y Nintendo (Recuerda que nuestros precios son en dolares)"
);

let cantidadJuegos = parseInt(
  prompt("Cuantos juegos quieres comprar? (Máximo 4)")
);

while (isNaN(cantidadJuegos) || cantidadJuegos < 1 || cantidadJuegos > 4) {
  cantidadJuegos = parseInt(
    prompt(
      "Recuerda, ingresa una cantidad máxima de 4 juegos." +
        "\nCuantos juegos quieres comprar?"
    )
  );
}

let consola = prompt(
  "Para que consola necesitas los juegos? (Escribe Xbox, Play o Nintendo)"
).toLowerCase();

while (consola != "xbox" && consola != "play" && consola != "nintendo") {
  consola = prompt("Consola invalida"+
    "\nPara que consola necesitas los juegos? (Escribe Xbox, Play o Nintendo)"
  );
}

const filtroJuegos = juegos.filter((juegosFiltrados) =>
  juegosFiltrados.platforms.includes(consola)
);

let filtro = [];
filtroJuegos.forEach((game) => {
  filtro.push({ name: game.name, price: game.price, id: game.id });
  console.log(`${game.id} - ${game.name}: $${game.price}`);
});

let carrito = [];
function filtrarJuegos(filtro) {
  if (consola == "nintendo") {
    alert("Aún no tenemos stock en esta marca.");
  } else {
    for (i = 1; i <= cantidadJuegos; i++) {
      let preguntaId = parseInt(
        prompt("Ingresa el numero correspondiente al juego que deseas adquirir")
      );
      if (consola == "xbox"){
        while (preguntaId != 1 && preguntaId != 2 && preguntaId != 3 && preguntaId != 4){
          preguntaId = parseInt(
            prompt("Ingresa el numero correspondiente al juego que deseas"+ "\nEste numero lo encuentras antes del nombre del juego, por ejemplo: 1 - Fifa"));
        }
      } else{
        while (preguntaId != 1 && preguntaId != 5 && preguntaId != 6 && preguntaId != 7){
          preguntaId = parseInt(
            prompt("Ingresa el numero correspondiente al juego que deseas"+ "\nEste numero lo encuentras antes del nombre del juego, por ejemplo: 1 - Fifa"));
        }
      }
      const busquedaId = filtro.find((idJuego) => idJuego.id == preguntaId);
      carrito.push({ name: busquedaId.name, price: busquedaId.price });
    }
  }
}
filtrarJuegos(filtro);

function carroCompras(carrito) {
  if (consola == "nintendo") {
    alert("Vuelve mas tarde");
  } else {
    for (const juegosParaComprar of carrito) {
      console.log(
        "El juego seleccionado es " +
          juegosParaComprar.name +
          ", su valor es de $" +
          juegosParaComprar.price +
          " para " +
          consola
      );
    }
    const compraTotal = carrito.reduce(
      (acumulador, elemento) => acumulador + elemento.price,
      0
    );
    console.log(
      "La cantidad de juegos que vas a comprar es de " +
        cantidadJuegos +
        " y el valor a pagar es de $" +
        compraTotal
    );
  }
}

carroCompras(carrito);
