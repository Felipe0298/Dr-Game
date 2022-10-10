const juegos = [
  {
    name: "Fifa",
    price: 59.99,
    genre: ["deportes", "estrategia"],
    platforms: ["Xbox", "PlayStation"],
  },
  {
    name: "Halo",
    price: 49.99,
    genre: ["accion", "disparos"],
    platforms: ["Xbox"],
  },
  {
    name: "Gears 5",
    price: 29.99,
    genre: ["accion", "disparos"],
    platforms: ["Xbox"],
  },
  {
    name: "Forza",
    price: 47.99,
    genre: "carreras",
    platforms: ["Xbox"],
  },
  {
    name: "God of War",
    price: 39.99,
    genre: ["accion"],
    platforms: ["PlayStation"],
  },
  {
    name: "The last of us 2",
    price: 49.99,
    genre: ["accion","estrategia"],
    platforms: ["PlayStation"],
  },
  {
    name: "shadow of colossus",
    price: 49.99,
    genre: ["accion","aventura"],
    platforms: ["PlayStation"],
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
    prompt("Recuerda, ingresa una cantidad máxima de 4 juegos." +"\nCuantos juegos quieres comprar?")
  );
}

let consola = prompt(
  "Para que consola necesitas los juegos? (Escribe Xbox, Play o Nintendo)"
).toLowerCase();


while (
  consola != "xbox" &&  consola != "play" &&  consola != "nintendo") {
  consola = prompt(
    "Para que consola necesitas los juegos? (Escribe Xbox, Play o Nintendo)"
  );
}

let compraJuegos = 0;

function jugar(consola, cantidadJuegos) {
  if (consola == "xbox") {
    for (i = 1; i <= cantidadJuegos; i++) {
      let juego = prompt(
        "1. Fifa 23: $60" +
          "\n2. Halo Infinite (Campaña): $50" +
          "\n3. Gears 5: $30" +
          "\n4. Forza Horizon 5: $48" +
          "\nPara comprar, ingresa el numero del juego"
      );
      if (juego == "1") {
        juego = fifa;
        console.log("El juego ingresado fue Fifa 23");
      } else if (juego == "2") {
        juego = halo;
        console.log("El juego ingresado fue  Halo Infinite (Campaña)");
      } else if (juego == "3") {
        juego = gears;
        console.log("El juego ingresado fue  Gears 5");
      } else if (juego == "4") {
        juego = forza;
        console.log("El juego ingresado fue  Forza Horizon 5");
      } else {
        alert("Ingrese la información solicitada");
      }
      alert("El precio es $" + juego);
      compraJuegos += juego;
      console.log("El precio total es $" + compraJuegos);
    }
    alert("El precio final a pagar es $" + compraJuegos);
    alert("Gracias por tu compra, te esperamos pronto");
  } else if (consola == "play") {
    for (i = 1; i <= cantidadJuegos; i++) {
      juego = prompt(
        "1. Fifa 23: $60" +
          "\n2. God of war 4: $40" +
          "\n3. The last of us 2: $50" +
          "\n4. Shadow of the Colossus: $20" +
          "\nPara comprar, ingresa el numero del juego"
      );
      if (juego == "1") {
        juego = fifa;
        console.log("El juego ingresado fue Fifa 23");
      } else if (juego == "2") {
        juego = god;
        console.log("El juego ingresado fue God of war 4");
      } else if (juego == "3") {
        juego = last2;
        console.log("El juego ingresado fue The last of us 2");
      } else if (juego == "4") {
        juego = shadow;
        console.log("El juego ingresado fue Shadow of the Colossus");
      } else {
        alert("Ingrese la información solicitada");
      }
      alert("El precio es $" + juego);
      compraJuegos += juego;
      console.log("El precio total es $" + compraJuegos);
    }
    alert("El precio final a pagar es $" + compraJuegos);
    alert("Gracias por tu compra, te esperamos pronto");
  } else if (consola == "nintendo") {
    alert("Aún no tenemos stock en nintendo" + "\nVuelve pronto");
  } else {
    alert("No ingresaste una consola valida");
    alert("Gracias por ingresar a nuestra tienda");
  }
}

jugar(consola, cantidadJuegos);
