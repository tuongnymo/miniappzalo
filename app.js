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
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');  // Lấy tham số 'category' từ URL

  const categoryNames = {
    'giay-nam': 'Giày Nam',
    'dep-nam': 'Dép Nam',
    'giay-nu': 'Giày Nữ',
    'dep-nu': 'Dép Nữ'
  };

  const displayName = categoryNames[category] || 'Danh mục';

  // Gắn vào tiêu đề và breadcrumb
  const titleEl = document.querySelector('.product-header h1');
  if (titleEl) titleEl.textContent = `Danh mục: ${displayName}`;

  // Dữ liệu sản phẩm (Chỉ lấy sản phẩm "Giày Nam")
  const productsData = {
    "giay-nam": [
      { name: 'Giày da cao cấp', price: '1.200.000đ', image: 'https://i.imgur.com/IvQMoRA.jpeg', rating: 5, sold: 150 },
      { name: 'Giày thể thao nam', price: '950.000đ', image: 'https://i.imgur.com/vGgRYcG.jpeg', rating: 4, sold: 100 },
      { name: 'Giày công sở nam', price: '850.000đ', image: 'https://i.imgur.com/2Fx9QmO.jpeg', rating: 5, sold: 200 }
    ],
    "dep-nam": [
      // Dữ liệu dép nam
    ],
    // Các danh mục khác
  };

  // Lọc và hiển thị sản phẩm theo danh mục
  const productGrid = document.querySelector('.product-grid');
  if (category && productsData[category]) {
    const filteredProducts = productsData[category];
    filteredProducts.forEach(product => {
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
  }
});
