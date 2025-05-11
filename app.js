const params = new URLSearchParams(window.location.search);
const type = params.get("type");

const typeMap = {
  "giay-nam": "Giày nam",
  "giay-nu": "Giày nữ",
  "tui-xach": "Túi xách",
  "phu-kien": "Phụ kiện"
};

document.getElementById("product-title").innerText = typeMap[type] || "Sản phẩm";
