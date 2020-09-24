import http from 'k6/http';

export default function () {
  var url = 'http://computer-database.gatling.io/computers';
  var payload = "";
  // var payload = JSON.stringify({
    // email: 'johndoe@example.com',
    // password: 'PASSWORD',
  // });

  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}
