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
const productList = document.getElementById("product-list");

// Ví dụ dữ liệu sản phẩm
const products = [
  {
    name: "Đầm cổ tròn dáng suông chân phối tơ",
    image: "https://i.imgur.com/xz2XsNk.jpeg",
    price: "795.000đ",
    sold: 280,
    rating: 0
  },
  {
    name: "Đầm cổ nam dán dây dáng dài",
    image: "https://i.imgur.com/N9KUYQ7.jpeg",
    price: "785.000đ",
    sold: 308,
    rating: 0
  },
  {
    name: "Đầm cổ tròn chân bồng",
    image: "https://i.imgur.com/hv7R0pg.jpeg",
    price: "755.000đ",
    sold: 280,
    rating: 0
  },
  {
    name: "Đầm dáng ôm A 2 dài",
    image: "https://i.imgur.com/Ce6YbY1.jpeg",
    price: "785.000đ",
    sold: 343,
    rating: 0
  }
  // ... tiếp tục cho đến 24 sản phẩm
];

// Hiển thị sản phẩm
productList.innerHTML = products.map(product => `
  <div class="product-card">
    <div class="product-img">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <h3 class="product-name">${product.name}</h3>
    <div class="product-price">${product.price}</div>
    <div class="product-meta">
      <div class="stars">★★★★★</div>
      <div class="sold">(${product.sold} đã bán)</div>
    </div>
  </div>
`).join('');
