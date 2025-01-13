/* const formulario = document.getElementById('formulario');
const exito = document.getElementById('exito');
const error = document.getElementById('error');
const notificationBadge = document.getElementById("notification-badge");
const notificationContainer = document.getElementById("order-notifications");
const ordersList = document.getElementById("orders-list");

// Función para enviar el pedido a la API de SheetBest
const sendOrderToSheet = async (order) => {
    try {
        const response = await fetch('https://api.sheetbest.com/sheets/f571e198-0732-45b9-af3c-a357332a1331', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        });
        const data = await response.json();
        console.log('Pedido registrado:', data);
        return data;
    } catch (error) {
        console.error('Error al registrar el pedido:', error);
        return null;
    }
};

// Función para cargar los pedidos desde la hoja de Google Sheets
const loadOrdersFromSheet = async () => {
    try {
        const response = await fetch('https://api.sheetbest.com/sheets/f571e198-0732-45b9-af3c-a357332a1331');
        const data = await response.json();
        console.log('Pedidos cargados:', data);
        return data;
    } catch (error) {
        console.error('Error al cargar los pedidos:', error);
        return [];
    }
};

// Función para mostrar un pedido en el dashboard
const displayOrder = (order) => {
    const orderItem = document.createElement("li");
    orderItem.classList.add("list-group-item");
    orderItem.innerHTML = `
        <strong>${order.nombre}</strong> ha pedido ${order.tipoMenu} <br>
        <small>Pedido realizado a las ${order.fecha}</small>
    `;
    ordersList.appendChild(orderItem);
};

// Función para mostrar una notificación
const showNotification = (order) => {
    const notificationItem = document.createElement("div");
    notificationItem.classList.add("notification-item");
    notificationItem.innerHTML = `
        <strong>Nuevo Pedido:</strong> Pedido de ${order.nombre} - ${order.tipoMenu} <br>
        <small>Pedido registrado a las ${order.fecha}</small>
    `;
    notificationContainer.appendChild(notificationItem);
    notificationContainer.style.display = "block";

    // Esconder la notificación después de 5 segundos
    setTimeout(() => {
        notificationItem.style.display = "none";
    }, 5000);
};

// Manejar la sumisión del formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const order = {
        nombre: formulario.nombre.value,
        correo: formulario.correo.value,
        telefono: formulario.telefono.value,
        tipoMenu: formulario.tipoMenu.value,
        descripcion: formulario.descripcion.value,
        fecha: new Date().toLocaleString() // Fecha actual
    };

    sendOrderToSheet(order).then((response) => {
        if (response) {
            exito.style.display = "block";
            error.style.display = "none";
            showNotification(order); // Mostrar notificación
        } else {
            exito.style.display = "none";
            error.style.display = "block";
        }
    });
});

// Cargar pedidos al iniciar el dashboard
document.addEventListener('DOMContentLoaded', () => {
    loadOrdersFromSheet().then((orders) => {
        orders.forEach(order => {
            displayOrder(order);
        });
    });
});
 */