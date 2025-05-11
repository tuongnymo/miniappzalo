// app.js
document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const sortSelect = document.getElementById("sort");

  if (!CATEGORY || !productList) return;

  let currentData = [];

  function renderProducts(data) {
    productList.innerHTML = data.map(p => `
      <div class="product-item">
        <img src="${p.image}" alt="${p.name}">
        <p>${p.name}</p>
        <p class="price">${Number(p.price).toLocaleString()}đ</p>
      </div>
    `).join('');
  }

  function sortAndRender() {
    const sortValue = sortSelect?.value || "default";
    let sorted = [...currentData];

    if (sortValue === "asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortValue === "desc") {
      sorted.sort((a, b) => b.price - a.price);
    }

    renderProducts(sorted);
  }

  fetch("example.json")
    .then(res => res.json())
    .then(data => {
      currentData = data.filter(p => p.category === CATEGORY);
      sortAndRender();
    });

  if (sortSelect) {
    sortSelect.addEventListener("change", sortAndRender);
  }
});
