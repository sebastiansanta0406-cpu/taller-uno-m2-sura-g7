let compras = ["manzanas"];
compras.push["leche"];
compras.push["pan"];
compras.unshift["huevos"];
compras.splice[1, 1];
console.log(compras);

//2
let tareas = ["revisar e-mails"];
tareas.unshift("llamar al cliente");
tareas.unshift("preparar reporte");
tareas.shift();
tareas.shift();
console.log(tareas);

//3
let historial = ["google.com", "youtube.com", "facebook.com"];
historial.pop();
historial.pop();
console.log(historial);

//4
let colaImpresion = ["doc.pdf","doc2.png","doc3.jpg"];
colaImpresion.shift();
colaImpresion.push("doc4.txt");
colaImpresion.shift();
console.log(colaImpresion);

//5
let fila = ["Ana","Luis","Carlos","Maria"];
fila.splice(1,1);
fila.splice(1,0,"jorge");
console.log(fila);

//6
let mazo = ["As","Rey","Reina","Jota"];
mazo.reverse();
mazo.shift();
console.log(mazo);

//7
let asientos = ["Ocupado","Libre","Libre","Libre","Ocupado"];
asienstos.fill("Reservado",1,4);
console.log(asiesntos);

//8
let productos = ["Monitor", "Teclado", "Mouse Roto", "Webcam"];
productos.splice(2,1,"Mouse Nuevo");
console.log(productos);

//9

let estudiantes = ["Zapata", "Alvarez", "Gomez", "Bernal"];
estudiantes.sort();
console.log(estudiantes);

//10

let puntuaciones = [100, 85, 92, 78];
puntuaciones.fill(0);

//11
let carrito = [];
carrito.push("camisa","pantalon");
carrito.unshift("zapatos");
carrito.splice(1,1);
console.log(carrito);

//12

let commits = ["v1.0", "v1.1"];
commits.push("v1.2");
commits.pop("v1.2");
commits.push("v1,2-corregido");
console.log(commits);

//13

let receta = ["Paso 2: Mezclar ingredientes", "Paso 3: Hornear"];
receta.push("Paso 4: Servir");
console.log(receta);

//14
let palabras = ["uno", "dos", "cuatro"];
palabras.reverse();
palabras.splice("0,1,tres");
console.log(palabras);

//15
let equipo = ["Ana (Líder)", "Juan (Dev)", "Maria (Diseñadora)"];
equipo.splice(1,1);
equipo.push(""Pedro(Dev)", "Luisa(Dev)"");
console.log(equipo);

//16
let parking = ["CarroA", "Libre", "Libre", "CarroB"];
parking.shift(0);
parking.splice(0,2,"MotoA", "MotoB");
console.log(parking);

//17
let feed = ["Foto de Ana", "Video de Juan", "Noticia de Empresa"];
feed.unshift("Alerte del Sistema");
feed.pop("Noticias de Empresa");
console.log(feed);

//18
let invitados = ["Carlos", "Beatriz", "David", "Ana"];
invitados.sort();
console.log(invitados);

//19
let tablero = ["Inicio", null, null, null, null, "Fin"];
tablero.fill("casilla vacia", 1,5);
console.log(tablero);

//20
let codigos = ["A-10", "C-30", "B-20", "D-40"];
codigos.sort();
codigos.splice(2,1);
codigos.unshift("X-99");
codigos.reverse();
console.log(codigos);







