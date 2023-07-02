function checkEmail(email) {
    var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return valid.test(email);
  }
  
  var email = prompt("Nhập địa chỉ email:");
  if (checkEmail(email)) {
    console.log("Email hợp lệ");
  } else {
    console.log("Email không hợp lệ");
  }
  