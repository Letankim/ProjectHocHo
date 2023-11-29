const googleAuthCode = "4/yU4cQZTMnnMtetyFcIWNItG32eKxxxgXXX-Z4yyJJJo.4qHskT-UtugceFc0ZRONyF4z7U4UmAI";

// Gửi mã code đến máy chủ của bạn để thực hiện token exchange
// Bạn cần gửi yêu cầu POST đến https://oauth2.googleapis.com/token với các tham số cần thiết
// Các tham số bao gồm client_id, client_secret, redirect_uri, grant_type (authorization_code) và mã code
// Xem tài liệu của Google về Token Exchange để biết thêm chi tiết.

// Ví dụ sử dụng Fetch API để gửi yêu cầu đến máy chủ
fetch('https://oauth2.googleapis.com/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    'client_id': '20311001743-42a2raf50afkrglq1khm1j3ekork2692.apps.googleusercontent.com',
    'client_secret': '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',
    'redirect_uri': 'http://127.0.0.1:5500',
    'grant_type': 'authorization_code',
    'code': googleAuthCode,
  }),
})
  .then(response => response.json())
  .then(data => {
    // data.access_token chứa mã thông tin truy cập
    // data.refresh_token chứa mã làm mới
    console.log('Access Token:', data.access_token);
    console.log('Refresh Token:', data.refresh_token);
  })
  .catch(error => console.error('Error:', error));
