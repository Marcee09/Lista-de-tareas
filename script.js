let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function render() {
  const ul = document.getElementById("lista");
  ul.innerHTML = "";
  tareas.forEach((t, i) => {
    const li = document.createElement("li");

    // Texto de la tarea
    const span = document.createElement("span");
    span.textContent = t.texto;
    span.className = t.hecha ? "done" : "";
    li.appendChild(span);

   // Contenedor para los botones
const divBotones = document.createElement("div");
divBotones.className = "botones";

// Botón para marcar como hecha / desmarcar
const botonHecha = document.createElement("button");
botonHecha.className = t.hecha ? "botonDesmarcar" : "botonHecha";
botonHecha.innerHTML = t.hecha 
  ? '<span class="material-icons">close</span>' 
  : '<span class="material-icons">check</span>';
botonHecha.onclick = () => toggle(i);

// Botón para eliminar
const botonEliminar = document.createElement("button");
botonEliminar.className = "botonEliminar"; 
botonEliminar.innerHTML = '<span class="material-icons">delete</span>';
botonEliminar.onclick = () => eliminar(i);

// Agregar botones al div
divBotones.appendChild(botonHecha);
divBotones.appendChild(botonEliminar);

// Agregar div al li
li.appendChild(divBotones);
ul.appendChild(li);

  });
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function agregar() {
  const input = document.getElementById("tarea");
  if (input.value.trim()) {
    tareas.push({ texto: input.value, hecha: false });
    input.value = "";
    render();
  }
}

function toggle(i) {
  tareas[i].hecha = !tareas[i].hecha;
  render();
}

function eliminar(i) {
  tareas.splice(i, 1);
  render();
}

// Inicializa la lista
render();
