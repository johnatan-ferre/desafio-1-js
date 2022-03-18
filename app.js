let num = Number(prompt("Ingrese un número entre 1 y 10."));
if (num >= 1 && num <= 10) {
    for (let i = 1; i <= 10; i++) {
        while (num <= 5) {
            doble = num * 2;
            alert("El doble del número ingresado es " + doble);
            num = Number(prompt("Ingrese otro número."))
        }
        while (num > 5 && num <= 10) {
            resultado = num + 10;
            alert("El número ingresado más 10, es " + resultado);
            num = Number(prompt("Ingrese otro número."))
        }
    }
} else {
    alert("El número ingresado no cumple con lo solicitado.")
}