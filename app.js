const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

fetch('example.json')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('product-list');
    const filtered = data.filter(item => item.category === category);

    if (filtered.length === 0) {
      productList.innerHTML = "<p>Không có sản phẩm nào trong danh mục này.</p>";
    } else {
      filtered.forEach(product => {
        const html = `
          <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString()} VND</p>
          </div>`;
        productList.innerHTML += html;
      });
    }
  })
  .catch(error => {
    console.error("Lỗi khi tải JSON:", error);
    document.getElementById('product-list').innerHTML = "<p>Lỗi tải sản phẩm!</p>";
  });
