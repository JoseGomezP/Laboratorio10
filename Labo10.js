//Primer punto
console.log("Bienvenidos\n");
console.log("Este es el primer punto...");
let nombre = "Pedro"; let edad = 15; let esEstudiante = true;
console.log("El nombre es: ", nombre);
console.log("La edad es: ", edad);
console.log("Es estudiante?", esEstudiante);
//Segundo punto
console.log("\nEste es el segundo punto...");
let a=10; let b=5;
console.log("Operadores numericos...");
console.log("La suma es: ", a + b);
console.log("La resta es: ", a - b);
console.log("La multiplicacion es: ", a * b);
console.log("La division es: ", a / b);
console.log("Es igual? ", a == b );
console.log("Es diferente? ", a != b );
console.log("a es mayor que b? ", a > b );
console.log("a es menor que b? ", a < b );
console.log("a es mayor o igual que b? ", a >= b );
console.log("a es menor o igual que b? ", a <= b );
//Tercer punto
console.log("\nEste es el tercer punto...");
console.log("Operadores logicos: ")
let esMayorDeEdad = false; let tieneLicencia = true;
console.log("Es mayor de edad? ", esMayorDeEdad);
console.log("Tiene licencia? ", tieneLicencia);
console.log("Puede conducir?", esMayorDeEdad && tieneLicencia);
console.log("Puede conducir por ser mayor de edad? ", esMayorDeEdad || tieneLicencia);
console.log("Concatenar Strins: ");
console.log("Bienvenido...", "\tNombre: ", nombre, "\tEdad: ", edad);
//Cuarto punto
console.log("\nEste es el cuarto punto...");
let nom = prompt("Digite el nombre: ");
let ed = parseInt(prompt("Digite su edad: "));
let esEstu = prompt("Es estudiante? (si/no) ").toLowerCase() == 'si';
if(ed >= 18){
    console.log("Es mayor de edad");
}else{
    console.log("No es mayor de edad");
}
if(esEstu == "si"){
    console.log("Si tiene derecho al descuento");
}else{
    console.log("No tiene derecho al descuento");
}

