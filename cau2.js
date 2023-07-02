//Khai báo và sử dụng js clousure (code ví dụ)
//Để khai báo và sử dụng Closure trong JavaScript, chúng ta có thể sử dụng cú pháp hàm lồng nhau.
function Function1() {
    var Variable1 = 'Hello';
  
    function Function2() {
      var Variable2 = ' world';
      console.log(Variable1 + Variable2);
    }
  
    return Function2;
  }
  
  var closure = Function1();
  closure(); // In ra "Hello world"
  