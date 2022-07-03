// Cần call API để lấy danh sách user và hiển thị ra giao diện

// Hàm main sẽ được chạy khi ứng dụng được khởi chạy
main();

function main() {
  // B1: Gọi API lấy danh sách user
  //Hàm này chưa có mà anh sử dụng, anh chưa viết phương thức để lấy data (Dùng axios để gọi api lấy data - data sẽ tạo từ mockapi)
  //Dựa vào bài productAPI để viết api lấy data anh nhé
  apiGetUsers().then(function (result) {
    console.log("result main", result);
    // Tạo biến users nhận kết quả trả về từ API
    var users = result.data;

    // Sau khi đã lấy được data từ API thành công
    // Duyệt mảng data và khởi tạo các đối tượng user
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      users[i] = new User(
        user.id,
        user.hoTen,
        user.taiKhoan,
        user.matKhau,
        user.email,
        user.loaiND,
        user.ngonNgu,
        user.moTa,
        user.hinhAnh
      );
    }
    // Gọi hàm display để hiển thị danh sách user ra giao diện
    display(users);
  });
}
function display(users) {
  var html = "";
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    html += `
    <div class="col-3">
    <img src="${user.hinhAnh}" alt="" />
    <p>${user.ngonNgu}</p>
    <h1>${user.hoTen}</h1>
    <h5>
      ${user.moTa}
         
    </h5>
  </div>
         
        
    `;
  }
  // DOM tới tbody và innerHTML bằng biến html
  document.querySelector(".fortolio").innerHTML = html;
}
// console.log(user);
