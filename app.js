const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const typeMap = {
  "giay-nam": "Giày nam",
  "giay-nu": "Giày nữ",
  "tui-xach": "Túi xách",
  "phu-kien": "Phụ kiện"
};

document.getElementById("product-title").innerText = typeMap[category] || "Sản phẩm";
