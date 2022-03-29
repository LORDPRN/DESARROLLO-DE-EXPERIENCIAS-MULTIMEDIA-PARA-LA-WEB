// //objeto forma 1
// const carro1 = {}
// //objeto forma 2
// const carro2 = new Object();
// //objeto forma 3
// const carro3 = Object.create();
//meter dentro de un objeto una función o dentro de una función un objeto
//4ta forma iniciar objeto con new antes de una funcion
function Carro(marca, modelo, color){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
}
const miCarro = new Carro('Renault','Sandero','gris')
miCarro.marca;
miCarro.modelo;
miCarro.color;
console.log("Mi carro es un: " + miCarro.marca + " " + miCarro.modelo + " " + miCarro.color);

let edad = 36;
let miEdad = edad;
miEdad = 37;
console.log("Edad es: " + edad);

// los objetos se pasan como referencia, si pasamos objetos que cambian con el tiempo el objeto se mantiene en el mismo valor

//metí un arreglo en un objeto. (se agregan mas propiedades con la coma)
const vehiculo = {
    tipo: ["Carro", "Moto", "Bote"],
    //objeto dentro de otro
    marca: {
        nombre: "BMW"
    },
        motor: "1200HP"
    
}
console.log(vehiculo.tipo);
//si yo quiero que me imprima solo uno entonces:
console.log(vehiculo.tipo[1]);
console.log(vehiculo.marca.nombre)
console.log(vehiculo.motor);



//para ver la marca y el modelo ahí mismo

const car = {
    brand: "Suzuki",
    model: "Swift",
    start: function(){
        console.log(`Car started ${this.brand} ${this.model}`);
    }
}
car.start();

const logger= console.log;
let showinfo = document.getElementsByTagName("h2")[0].innerHTML=logger;