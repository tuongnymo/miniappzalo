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
