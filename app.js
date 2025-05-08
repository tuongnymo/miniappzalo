app.js
ZaloMiniApp.getUserInfo()
  .then(user => {
    document.getElementById("user-info").innerText = `Xin chào, ${user.name || 'bạn'}!`;
  })
  .catch(err => {
    document.getElementById("user-info").innerText = 'Không thể lấy thông tin người dùng.';
    console.error(err);
  });
