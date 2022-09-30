const fifa=60;
const halo=50;
const gears=30;
const forza=48;

const god=40;
const last2=50;
const shadow=20;

alert("Bienvenido a Dr Game");
alert("Acá podrás comprar los juegos de tus consolas favoritas, Xbox y Play (Recuerda que nuestros precios son en dolares)");

let j= parseInt(prompt("Cuantos juegos quieres comprar? (Máximo 4)"));
let consola=prompt("Para que consola necesitas los juegos? (Escribe Xbox o Play)");

compraJuegos=0;

function jugar(consola,j){
    if ((consola=="Xbox") || (consola=="XBOX") || (consola== "xbox")){
        juego=prompt("1. Fifa 23: $60"+"\n2. Halo Infinite (Campaña): $50"+"\n3. Gears 5: $30"+"\n4. Forza Horizon 5: $48"+"\nPara comprar, ingresa el numero del juego");

        for (i=1;i<=j;i++){
            if (juego=="1"){
                juego=fifa;
                console.log("El juego ingresado fue Fifa 23")
            }else if (juego=="2"){
                juego=halo;
                console.log("El juego ingresado fue  Halo Infinite (Campaña)")
            }else if (juego=="3"){
                juego=gears;
                console.log("El juego ingresado fue  Gears 5")
            }else if(juego=="4"){
                juego=forza;
                console.log("El juego ingresado fue  Forza Horizon 5")
            }else{
                alert("Ingrese la información solicitada");
            }
            alert("El precio es $" + juego);
            compraJuegos+=juego;
            console.log("El precio es $"+compraJuegos);
            juego=prompt("1. Fifa 23: $60"+"\n2. Halo Infinite (Campaña): $50"+"\n3. Gears 5: $30"+"\n4. Forza Horizon 5: $48"+"\nPara comprar, ingresa el numero del juego");
        }
        alert("El precio final a pagar es $"+compraJuegos);
    } else if ((consola=="Play") || (consola=="PLAY") || (consola== "play")){
        juego=prompt("1. Fifa 23: $60"+"\n2. God of war 4: $40"+"\n3. The last of us 2: $50"+"\n4. Shadow of the Colossus: $20"+"\nPara comprar, ingresa el numero del juego");

        for (i=1;i<=j;i++){
            if (juego=="1"){
                juego=fifa;
                console.log("El juego ingresado fue Fifa 23")
            }else if (juego=="2"){
                juego=god;
                console.log("El juego ingresado fue God of war 4")
            }else if (juego=="3"){
                juego=last2;
                console.log("El juego ingresado fue The last of us 2")
            }else if(juego=="4"){
                juego=shadow;
                console.log("El juego ingresado fue Shadow of the Colossus")
            }else{
                alert("Ingrese la información solicitada");
            }
            alert("El precio es $" + juego);
            
            compraJuegos+=juego;
            console.log("El precio es $"+compraJuegos);
            juego=prompt("1. Fifa 23: $60"+"\n2. God of war 4: $40"+"\n3. The last of us 2: $50"+"\n4. Shadow of the Colossus: $20"+"\nPara comprar, ingresa el numero del juego");
        }
       
    }
   
    alert("El precio final a pagar es $"+compraJuegos);
}

jugar(consola,j);