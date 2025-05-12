document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('product-list');
  const sortSelect = document.getElementById('sort');

  if (!window.CATEGORY) return;

  fetch('https://miniappzalo.vercel.app/example.json')
    .then(res => res.json())
    .then(data => {
      let filtered = data.filter(p => p.category === CATEGORY);

      function render(products) {
        productList.innerHTML = products.map(p => `
          <div class="product-item">
            <img src="${p.image}" alt="${p.name}">
            <p>${p.name}</p>
            <p class="price">${formatPrice(p.price)}</p>
          </div>
        `).join('');
      }

      function formatPrice(price) {
        return price.toLocaleString('vi-VN') + 'đ';
      }

      sortSelect.addEventListener('change', () => {
        const type = sortSelect.value;
        if (type === 'asc') {
          filtered.sort((a, b) => a.price - b.price);
        } else if (type === 'desc') {
          filtered.sort((a, b) => b.price - a.price);
        } else {
          filtered = data.filter(p => p.category === CATEGORY); // reset
        }
        render(filtered);
      });

      render(filtered);
    })
    .catch(err => {
      console.error('Lỗi khi tải dữ liệu sản phẩm:', err);
      productList.innerHTML = '<p>Không thể tải sản phẩm.</p>';
    });
});
