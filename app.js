const params = new URLSearchParams(window.location.search);
const type = params.get("type");

const typeMap = {
  "giay-nam": "Giày nam",
  "giay-nu": "Giày nữ",
  "tui-xach": "Túi xách",
  "phu-kien": "Phụ kiện"
};

document.getElementById("product-title").innerText = typeMap[type] || "Sản phẩm";
// Lấy tham số từ URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// Load và lọc dữ liệu
fetch('example.json')
  .then(res => res.json())
  .then(data => {
    const filtered = data.filter(p => p.category === category);
    renderProducts(filtered); // Hàm hiển thị sản phẩm
});
