// Lấy danh mục từ URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Lấy dữ liệu sản phẩm
fetch('example.json')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('product-list');
    const filteredProducts = data.filter(item => item.category === category);
    
    if (filteredProducts.length === 0) {
      productList.innerHTML = "<p>Không có sản phẩm trong danh mục này.</p>";
    } else {
      filteredProducts.forEach(product => {
        const productHTML = `
          <div class="product">
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString()} VND</p>
          </div>
        `;
        productList.innerHTML += productHTML;
      });
    }
  })
  .catch(error => {
    console.error("Lỗi tải sản phẩm:", error);
  });
