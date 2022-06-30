var baseUrl = "https://62b83a23f4cb8d63df5a80cd.mockapi.io/users";
// Hàm call API lấy danh sách người dùng
function apiGetUsers(search) {
  return axios({
    url: baseUrl,
    method: "GET",
    params: {
      name: search,
    },
  });
}
console.log(baseUrl);
