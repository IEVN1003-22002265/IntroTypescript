import {type Producto,calcularISV2} from './05-desestructuración-de-funciones.ts'

const carrito:Productos[] = [{
    desc: "Telefono 1",
    precio: 1000
},
{
    desc: "Telefono 2",
    precio: 2000
},
{
    desc: "Telefono 3",
    precio: 3000
}

]

const [total, isv]=calcularISV2(carrito);
console.log("Total carrito: ", total);
console.log("ISV carrito: ", isv);