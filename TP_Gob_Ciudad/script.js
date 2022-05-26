<<<<<<< HEAD
function calcularPrecio(evt) {
    let cant = parseInt(document.getElementById("cantidad").value);
    let descuento = document.getElementById("categoria").value;
    let totalAPagar = document.getElementById("totalAPagar");
    let estudiante = parseFloat(0.2);
    let trainee = parseFloat(0.5);
    let junior = parseFloat(0.85);
    let entrada = parseInt(200);
    let total;
    switch (descuento) {
        case "estudiante":
            total = entrada * cant * estudiante;
            break;
        case "trainee":
            total = entrada * cant * trainee;
            break;
        case "junior":
            total = entrada * cant * junior;
            break;
        default:
            total = entrada * cant;
    }
    totalAPagar.innerHTML = "Total a Pagar: $ " + total;
    console.log(total);
}

=======
function calcularPrecio(evt) {
    let cant = parseInt(document.getElementById("cantidad").value);
    let descuento = document.getElementById("categoria").value;
    let totalAPagar = document.getElementById("totalAPagar");
    let estudiante = parseFloat(0.2);
    let trainee = parseFloat(0.5);
    let junior = parseFloat(0.85);
    let entrada = parseInt(200);
    let total;
    switch (descuento) {
        case "estudiante":
            total = entrada * cant * estudiante;
            break;
        case "trainee":
            total = entrada * cant * trainee;
            break;
        case "junior":
            total = entrada * cant * junior;
            break;
        default:
            total = entrada * cant;
    }
    totalAPagar.innerHTML = "Total a Pagar: $ " + total;
    console.log(total);
}

>>>>>>> da6325da6cdd5d3cfec90687f9938a0041f62dbe
document.getElementById("resumen").onclick = calcularPrecio;