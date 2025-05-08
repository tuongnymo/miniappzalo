document.addEventListener('DOMContentLoaded', function() {
  const productList = document.getElementById('product-list');

  // Lấy dữ liệu từ example.json
  fetch('example.json')
      .then(response => response.json())
      .then(data => {
          // Hiển thị 8-12 sản phẩm đầu tiên
          const products = data.slice(0, 12); // Lấy tối đa 12 sản phẩm

          products.forEach(product => {
              const productItem = document.createElement('div');
              productItem.classList.add('product-item');

              productItem.innerHTML = `
                  <img src="${product.image}" alt="${product.name}">
                  <div class="name">${product.name}</div>
                  <div class="price">${product.discountPrice}₫</div>
                  <div class="old-price">${product.originalPrice}₫</div>
                  <div class="stars">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}</div>
              `;

              productList.appendChild(productItem);
          });
      })
      .catch(error => {
          console.error('Error loading product data:', error);
      });
});
