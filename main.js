const homeCards = document.querySelector(".article-cards");
const eventsdata = data.events;
function insertEvents(eventsArray) {
  for (let item of eventsArray) {
    homeCards.innerHTML += `
    <div class="card" id="cardsid" style="width: 18rem;">
     <img src=${item.image} class="card-img-top" alt="food">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <div class="divcardsprice">
              <p class="card-text">price: ${item.price}</p>
              <a href="./details.html?id=${item._id}" class="btn btn-primary">details</a>
            </div>
        </div>
    </div>`;
  }
}
insertEvents(eventsdata);
const categorias = data.events.map((events) => events.category);
const categoriasSinRepetidas = new Set(categorias);
const categoriasSinRepetidasArray = [...categoriasSinRepetidas];

const contenedor = document.getElementById("contenedor");
agregarInput(categoriasSinRepetidasArray);

function agregarInput(lista) {
  lista.forEach((elemento) => createLabel(elemento));
}

function createLabel(item) {
  const label = document.createElement("label");
  label.innerHTML = `
  <input type="checkbox" value="${item}"/><span class="textocheck">${item}</span>`;
  contenedor.appendChild(label);
}

const nombres = data.events.map((events) => events.name);
const nombresSinrepetir = new Set(nombres);
const nombresSinrepetirArray = [...nombresSinrepetir];

const serchs = document.getElementById("serchs");

serchs.addEventListener("nombres", (e) => {
  console.log(e.nombres.value);
});
