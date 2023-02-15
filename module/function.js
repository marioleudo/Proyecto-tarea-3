// funcion para crearCheckbox
export function crearCheckbox(eventData, cont) {
  const categorias = [...new Set(eventData.map((events) => events.category))];
  categorias.forEach((categoria) => {
    cont.innerHTML += `
        <label class="label-index"><input id="inputs" type="checkbox" value="${categoria}"/>${categoria}</label>
        `;
  });
}

// funcion para crear cartas
export function crearCartas(evento) {
  let div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML += `<div><img src="${evento.image}" class="card-img-top" alt="food">
    <div class="card-body">
    <h5 class="card-title">${evento.name}</h5>
    <div class="divcardsprice">
    <a href="./details.html?id=${evento._id}" class="btn btn-primary" id="prices">details</a>
    </div>
    </div>
    </div>`;
  return div;
}

// funcion para imprimir cartas
export function imprimirCartas(eventos, container) {
  container.innerHTML = "";
  let fragment = document.createDocumentFragment();
  eventos.forEach((evento) => {
    const divCartas = crearCartas(evento);
    fragment.appendChild(divCartas);
  });
  container.appendChild(fragment);
}
