let arrayAmigo = [];

function agregarAmigo() {
    if (arrayAmigo.length > 9) {
        alert("Ya no puede ingresar mas amigos,seleccione el boton 'sortear' para continuar.");
    }
    else {
        let lista = document.querySelector('#resultado');
        lista.innerHTML = "";
        let amigo = document.querySelector('#amigo').value.trim(); // Obtener el nombre ingresado

        // Validar que sea una cadena de texto válida
        if (typeof amigo === "string" && amigo !== "" && isNaN(amigo)) {
            // Añadir el amigo al array
            arrayAmigo.push(amigo);

            // Limpiar el campo de texto
            document.querySelector('#amigo').value = "";

            // Llamar a la función para actualizar la lista de amigos
            actualizarLista();
        } else {
            alert("Por favor, ingresa un nombre válido.");
        }
    }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    let lista = document.querySelector('#listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Recorrer el array de amigos y crear un <li> para cada uno
    for (let i = 0; i < arrayAmigo.length; i++) {
        // Crear un nuevo elemento <li>
        let li = document.createElement('li');

        // Asignar el nombre del amigo al contenido del <li>
        li.textContent = arrayAmigo[i];

        // Agregar el <li> a la lista en el HTML
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (arrayAmigo == 0) {
        alert("No ingreso ningun Amigo");
    }
    else {

        let amigoSorteado = Math.floor(Math.random() * 10);


        let lista = document.querySelector('#resultado');

        let lista2 = document.querySelector('#listaAmigos');

        lista.innerHTML = "";
        lista2.innerHTML = "";
        let li = document.createElement('li');

        // Asignar el nombre del amigo al contenido del <li>
        li.textContent = arrayAmigo[amigoSorteado];

        // Agregar el <li> a la lista en el HTML
        lista.appendChild(li);
        arrayAmigo.length = 0;
    }


}