function sumar(a: number, b: number): number {
    let res = a + b;
    return res;
}
 
const resultado = sumar(3, 5);
console.log(resultado);
 
function multiplicar(n1: number = 2, base: number = 1, n2: number = 4): number {
    return n1 * n2 * base;
}
 
console.log(multiplicar());
console.log(multiplicar(3));
console.log(multiplicar(3, 2));
 
interface Mascotas {
    nombre: string;
    edad: number;
    raza: string;
    sexo?: string;
    vacunado: boolean;
    mostrarEdad: () => void;
}
 
function mostrarMascotas(mascota: Mascotas, x: number): void {
    mascota.edad += x;
 
    console.log(mascota);
    mascota.mostrarEdad();
}
 
const nuevaMascota: Mascotas = {
    nombre: "Firulais",
    edad: 5,
    raza: "pastor aleman",
    vacunado: true,
    mostrarEdad() {
        console.log(`La edad de: ${this.nombre} es ${this.edad}`);
    }
};
 
mostrarMascotas(nuevaMascota, 3);