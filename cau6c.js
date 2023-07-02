// Function A trả về kết quả của input sau 2 giây
function A(input) {
    return new Promise((result) => {
      setTimeout(() => {
        result(input);
      }, 2000); 
    });
  }
  
  // Function B trả về kết quả của input sau 2 giây
  function B(input) {
    return new Promise((result) => {
      setTimeout(() => {
        result(input);
      }, 2000); 
    });
  }
  
  // Function C trả về kết quả của input sau 2 giây
  function C(input) {
    return new Promise((result) => {
      setTimeout(() => {
        result(input);
      }, 2000); 
    });
  }
  
  // Function D trả về kết quả của input sau 2 giây
  function D(input) {
    return new Promise((result) => {
      setTimeout(() => {
        result(input);
      }, 2000); 
    });
  }
  
  // Function E xuất kết quả từ input ban đầu của hàm A
  async function E(input) {
    try {
      const resultA = await A(input);
      const resultB = await B(resultA);
      const resultC = await C(resultB);
      const resultD = await D(resultC);
  
      console.log("Kết quả từ hàm E:", resultD);
      return resultD;
    } catch (error) {
      console.error("Đã có lỗi xảy ra:", error);
      throw error;
    }
  }
  
  // Gọi hàm E với input ban đầu
  const Input = 10;
  E(Input);
  