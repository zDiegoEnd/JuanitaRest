const formulario = document.getElementById('formulario');
const notificacion = document.getElementById('notificacion');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Obtener la fecha actual
    const fechaRegistro = new Date().toLocaleString();
    formulario.fecha.value = fechaRegistro;

    try {
        const respuesta = await fetch('https://api.sheetbest.com/sheets/f571e198-0732-45b9-af3c-a357332a1331', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Nombre": formulario.nombre.value,
                "Correo": formulario.correo.value,
                "Telefono": formulario.telefono.value,
                "Menu": formulario.menu.value,
                "Descripcion": formulario.descripcion.value,
                "Fecha": formulario.fecha.value
            })
        });

        const contenido = await respuesta.json();
        console.log(contenido);

        // Mostrar notificación de éxito
        notificacion.innerHTML = "¡Pedido registrado con éxito!";
        notificacion.classList.remove('alert-danger');
        notificacion.classList.add('alert', 'alert-success');

    } catch (error) {
        console.error(error);
        notificacion.innerHTML = "Hubo un error en el registro del pedido. Intenta nuevamente.";
        notificacion.classList.remove('alert-success');
        notificacion.classList.add('alert', 'alert-danger');
    }
});
