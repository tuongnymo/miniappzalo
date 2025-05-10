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
// Lấy tham số category từ URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// Mapping category → tên hiển thị tiếng Việt
const categoryNames = {
  "giay-nam": "Giày nam",
  "dep-nam": "Dép nam",
  "giay-nu": "Giày nữ",
  "dep-nu": "Dép nữ",
  "thoi-trang-nam": "Thời trang nam",
  "thoi-trang-nu": "Thời trang nữ"
};

// Gắn nội dung vào breadcrumb
const breadcrumb = document.getElementById("breadcrumb");
breadcrumb.innerHTML = `
  <a href="index.html">Trang chủ</a> &gt; 
  <span>Danh mục</span> &gt; 
  <strong>${categoryNames[category] || "Sản phẩm"}</strong>
`;
