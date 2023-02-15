const api = `https://mindhub-xj03.onrender.com/api/amazing`;
fetch(api)
  .then((response) => response.json())
  .then((data) => {
    const eventosD = data.events;
    const queryString = location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
    const cardD = eventosD.find((event) => event._id == id);
    const verTarjeta = document.getElementById("cardDescription");
    verTarjeta.innerHTML = `<div class="card" id="cartasindex">
<div class="card-descrip">
  <h5 style="color: white !important;" >Amazing Event Presents</h5>
  <h6 style="color: white !important;" class=" mb-2 text-muted">${cardD.name}</h6>
  <p class="card-text">${cardD.description}</p>
  <p style="color: white;" >Date: "${cardD.date}"</p>
  <p class="card-text">price: $${cardD.price}</p>
</div>
</div>
<div class="card" id="cartasindex" style="width: 25rem;" >
<img src="${cardD.image}" class="card-img-top" alt="special-events" style="width: 100%; height: 100%;">
</div>`;
  });
