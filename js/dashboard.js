const tablaPedidos = document.getElementById('tablaPedidos').getElementsByTagName('tbody')[0];
const notificacionTablero = document.getElementById('notificacionTablero');
const count = document.getElementById('count');
let numeroDeNotificaciones = 0;

async function cargarPedidos() {
    try {
        const respuesta = await fetch('https://api.sheetbest.com/sheets/f571e198-0732-45b9-af3c-a357332a1331');
        const pedidos = await respuesta.json();

        // Limpiar tabla antes de llenarla
        tablaPedidos.innerHTML = '';

        if (pedidos && pedidos.length > 0) {
            pedidos.forEach(pedido => {
                const fila = tablaPedidos.insertRow();
                fila.innerHTML = `
                    <td>${pedido.Nombre}</td>
                    <td>${pedido.Correo}</td>
                    <td>${pedido.Telefono}</td>
                    <td>${pedido.Menu}</td>
                    <td>${pedido.Descripcion}</td>
                    <td>${pedido.Fecha}</td>
                `;
            });

            // Notificación de nuevo pedido
            if (numeroDeNotificaciones === 0) {
                numeroDeNotificaciones++;
                count.textContent = numeroDeNotificaciones;
                notificacionTablero.style.display = "block";
                setTimeout(() => {
                    notificacionTablero.style.display = "none";
                }, 3000); // Desaparece después de 3 segundos
            }
        } else {
            console.log("No hay pedidos registrados.");
        }
    } catch (error) {
        console.error("Error al cargar los pedidos: ", error);
    }
}

// Cargar los pedidos cada 10 segundos
setInterval(cargarPedidos, 10000);
cargarPedidos();
