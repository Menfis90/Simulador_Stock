
const nombreProducto = prompt("Ingresá el nombre del producto:");
let stock = Number(prompt("¿Cuántas unidades hay disponibles?"));

let ventasRealizadas = 0;
let continuar = "si";

if (nombreProducto === null || nombreProducto.trim() === "") {
    alert("No ingresaste un nombre de producto.");
} else if (!Number.isInteger(stock) || stock < 0) {
    alert("El stock debe ser un número entero mayor o igual a cero.");
} else {
    console.log("=== SIMULADOR DE CONTROL DE STOCK ===");
    console.log("Producto: " + nombreProducto);
    console.log("Stock inicial: " + stock);

    while (continuar === "si") {
        const ingresoVenta = prompt(
            "Producto: " + nombreProducto +
            "\nStock disponible: " + stock +
            "\n¿Cuántas unidades querés vender?\nEscribí 0 para no realizar una venta."
        );

        if (ingresoVenta === null) {
            continuar = "no";
            console.log("Se canceló el registro de ventas.");
        } else {
            const cantidad = Number(ingresoVenta);

            if (ingresoVenta.trim() === "" ||
                !Number.isInteger(cantidad) ||
                cantidad < 0) {
                alert("Ingresá una cantidad válida: un número entero mayor o igual a cero.");
            } else if (cantidad === 0) {
                console.log("No se registró ninguna venta.");
            } else if (cantidad > stock) {
                console.log("Stock insuficiente. No se realizó la venta.");
                alert("No hay suficientes unidades disponibles.");
            } else {
                stock = stock - cantidad;
                ventasRealizadas = ventasRealizadas + cantidad;

                console.log("Venta registrada: " + cantidad + " unidades.");
                console.log("Stock restante: " + stock);
                alert("Venta registrada correctamente.");
            }

            if (continuar === "si") {
                const respuesta = prompt(
                    "¿Querés registrar otra venta? Escribí si o no."
                );

                if (respuesta === null) {
                    continuar = "no";
                } else if (respuesta.toLowerCase().trim() === "si") {
                    continuar = "si";
                } else if (respuesta.toLowerCase().trim() === "no") {
                    continuar = "no";
                } else {
                    alert("Respuesta no válida. El simulador finalizará.");
                    continuar = "no";
                }
            }
        }
    }

    console.log("=== RESUMEN FINAL ===");
    console.log("Producto: " + nombreProducto);
    console.log("Unidades vendidas: " + ventasRealizadas);
    console.log("Stock final: " + stock);

    alert(
        "Simulación finalizada.\n" +
        "Producto: " + nombreProducto +
        "\nUnidades vendidas: " + ventasRealizadas +
        "\nStock final: " + stock
    );
}
