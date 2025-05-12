document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const productList = document.getElementById("product-list");

  fetch("example.json")
    .then(res => res.json())
    .then(data => {
      const filtered = data.filter(p => p.category === category);
      if (filtered.length === 0) {
        productList.innerHTML = "<p>Không có sản phẩm nào.</p>";
        return;
      }

      filtered.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}₫</p>
        `;
        productList.appendChild(div);
      });
    })
    .catch(err => {
      productList.innerHTML = "<p>Lỗi khi tải sản phẩm.</p>";
      console.error(err);
    });
});
