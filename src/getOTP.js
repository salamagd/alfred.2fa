var servers = require('./servers.json');
var OTP = require('otp');
var action;

if (process.argv.length > 1) {
  action = process.argv[2];
}

if (action) {
  var idx = parseInt(action, 10);
  var secret = servers[idx].secret;
  var otp = OTP.parse(secret).totp();
  process.stdout.write(otp);
}
