let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim(); // Eliminamos espacios en blanco

    if (!nombreAmigo) {
        alert("Ingresa un nombre para iniciar la selección");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista actual

    amigos.forEach(amigo => { // Usar forEach para mejorar la legibilidad
        const item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("No tienes suficientes amigos para el sorteo");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.textContent = `El amigo al que debes hacer un regalo es: ${amigoSorteado}`;

    // Limpiamos la lista de amigos después del sorteo
    limpiarListaAmigos();
}

// Función para limpiar la lista de amigos
function limpiarListaAmigos() {
    document.getElementById("listaAmigos").innerHTML = "";
}

// Nueva función para limpiar la pantalla
function limpiarPantalla() {
    amigos = []; // Vaciar el array de amigos
    limpiarListaAmigos(); // Limpiar la lista en la pantalla
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado del sorteo
    document.getElementById("amigo").value = ""; // Limpiar el input
}