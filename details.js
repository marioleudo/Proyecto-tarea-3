const eventosD = data.events;
const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const cardD = eventosD.find((cards) => cards._id === id);
const verTarjeta = document.querySelector(".article-cards");
verTarjeta.innerHTML = `
<div class="card" id="cardsid" style="width: 18rem;">
  <img src=${cardD.image} class="card-img-top" alt="food">
      <div class="card-body">
          <h5 class="card-title">${cardD.name}</h5>
          <p class="card-text">${cardD.description}</p>
          <div class="divcardsprice">
            <p class="card-text">price: ${cardD.price}</p>
          </div>
      </div>
  </div>`;
