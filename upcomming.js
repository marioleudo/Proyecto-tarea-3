let upcommingevents = data.events.filter(
  (cardsfuture) => cardsfuture.date > data.currentDate
);
console.log(upcommingevents);
const eventosFuturos = document.querySelector(".article-cards");
for (let item of upcommingevents) {
  eventosFuturos.innerHTML += `
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
