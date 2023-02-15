import {
  crearCheckbox,
  crearCartas,
  imprimirCartas,
} from "./module/function.js";
const serchs = document.getElementById("serchs");
const contenedor = document.getElementById("contenedor");
const homeCarts = document.getElementById("homeCarts");
const eventData = data.events.filter(
  (cardspasadas) => cardspasadas.date < data.currentDate
);
serchs.addEventListener("keyup", filtrar);
contenedor.addEventListener("change", filtrar);
crearCheckbox(eventData, contenedor);
imprimirCartas(eventData, homeCarts);
crearCartas(data);

// funcion para filtrar
function filtrar(eventos) {
  let checked = [
    ...document.querySelectorAll('input[type="checkbox"]:checked'),
  ].map((ele) => ele.value);
  let filtrarPorCategory = eventData.filter(
    (personaje) => checked.includes(personaje.category) || checked.length === 0
  );
  let filtrarPorSerchs = filtrarPorCategory.filter((personaje) =>
    personaje.name.toLowerCase().includes(serchs.value.toLowerCase())
  );
  imprimirCartas(filtrarPorSerchs, homeCarts);
}
