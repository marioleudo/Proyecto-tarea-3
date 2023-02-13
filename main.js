const homeCards = document.querySelector(".article-cards");
const eventsdata = data.events;

function insertEvents(eventsArray, contenedor) {
  contenedor.innerHTML = "";
  let template = "";
  for (let item of eventsArray) {
    template += crearCartas(item);
  }
  contenedor.innerHTML += template;
}
function crearCartas(item) {
  return `<div class="card" id="cardsid" style="width: 18rem;">
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

insertEvents(eventsdata, homeCards);
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
  <input id="inputs" type="checkbox" value="${item}"/><span class="textocheck">${item}</span>`;
  contenedor.appendChild(label);
}

const serchs = document.getElementById("serchs");

function filtrarBusqueda(lista) {
  homeCards.innerHTML = "";
  let resultado = serchs.value.toLowerCase();
  let eventosDelResultado = [];
  for (let evento of lista) {
    let name = evento.name.toLowerCase();
    if (name.includes(resultado)) {
      eventosDelResultado.push(evento);
    }
  }
  return eventosDelResultado;
}

function busqueda(lista) {
  if (lista.length == 0) {
    homeCards.innerHTML += `<p> the result was not found </p>`;
  } else {
    insertEvents(lista, homeCards);
  }
}
serchs.addEventListener("keyup", function () {
  busqueda(eventsdata);
});

// const inputSerchs = document.getElementById("serchs");

// inputSerchs.addEventListener("submit", (event) => {
//   event.preventDefault();
//   homeCards.innerHTML += `
//   <div class="card" id="cardsid" style="width: 18rem;">
//    <img src=${item.image} class="card-img-top" alt="food">
//       <div class="card-body">
//           <h5 class="card-title">${item.name}</h5>
//           <div class="divcardsprice">
//             <p class="card-text">price: ${item.price}</p>
//             <a href="./details.html?id=${item._id}" class="btn btn-primary">details</a>
//           </div>
//       </div>
//   </div>`;
// });

// const inputs = document.getElementById("inputs");

// inputs.addEvenetListener("click", () => {
//   if (inputs !== categoriasSinRepetidasArray) {
//     cardsid.style.display = "none";
//   }
// });

// const nombres = data.events.map((events) => events.name);
// const nombresSinrepetir = new Set(nombres);
// const nombresSinrepetirArray = [...nombresSinrepetir];

// const serchs = document.getElementById("serchs");

// serchs.addEventListener("nombres", (e) => {
//   console.log(e.nombres.value);
// });

// function filtrarCategorias(categorias) {
//   let aux = [];
//   for (let elemento of categorias) {
//     if (elemento == [categorias]) {
//       aux.push(elemento);
//     }
//   }
//   return aux;
// }
// const categoria = filtrarCategorias(categorias);
// console.log(categoria);
