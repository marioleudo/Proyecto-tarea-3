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
          <p class="card-text">${item.description}</p>
          <div class="divcardsprice">
            <p class="card-text">price: ${item.price}</p>
            <a href="./details.html" class="btn btn-primary">details</a>
          </div>
      </div>
  </div>`;
}
