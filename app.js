document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');

  const categoryNames = {
    'giay-nam': 'Giày Nam',
    'dep-nam': 'Dép Nam',
    'giay-nu': 'Giày Nữ',
    'dep-nu': 'Dép Nữ',
    'thoi-trang-nam': 'Thời Trang Nam',
    'thoi-trang-nu': 'Thời Trang Nữ'
  };

  const displayName = categoryNames[category] || 'Danh mục';

  // Gắn vào tiêu đề và breadcrumb nếu có
  const titleEl = document.getElementById('category-title');
  const nameEl = document.getElementById('category-name');
  if (titleEl) titleEl.textContent = displayName;
  if (nameEl) nameEl.textContent = displayName;

  // Hiển thị sản phẩm
  fetch('example.json')
    .then(res => res.json())
    .then(data => {
      const filtered = data.products.filter(p => p.category === category);
      const container = document.getElementById('product-list');
      const countDisplay = document.getElementById('count-display');
      if (countDisplay) countDisplay.textContent = filtered.length;

      filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>${p.price}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error('Lỗi khi tải dữ liệu sản phẩm:', err);
    });
});
document.addEventListener('DOMContentLoaded', function () {
  const productList = [
    { name: 'Đầm có tròn dáng suông chân phối túi', price: '795,000đ', image: 'https://i.imgur.com/7hDMQRH.jpeg', rating: 5, sold: 280 },
    { name: 'Đầm có nam dan dây dáng dài', price: '785,000đ', image: 'https://i.imgur.com/R6CUWWU.jpeg', rating: 5, sold: 308 },
    { name: 'Đầm có tròn chân bồ đỏ', price: '755,000đ', image: 'https://i.imgur.com/xrexQel.jpeg', rating: 5, sold: 200 },
    { name: 'Đầm dáng ôm A 2 dai', price: '785,000đ', image: 'https://i.imgur.com/KIP324a.jpeg', rating: 4, sold: 239 },
    // Thêm 20 sản phẩm nữa theo mẫu trên
  ];

  const productGrid = document.querySelector('.product-grid');
  productList.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <div class="rating">⭐ (${product.rating}) <span>(${product.sold} đã bán)</span></div>
    `;
    productGrid.appendChild(productCard);
  });
});
