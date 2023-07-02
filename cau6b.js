// Function B trả về kết quả sau 1 thời gian hoặc đưa ra lỗi nếu input không hợp lệ
function B(input) {
    return new Promise((resolve, error) => {
      if (typeof input !== "number" || input <= 0) {
        // Gỉa lập lỗi nếu input không hợp lệ
        error(new Error("Lỗi: Input phải là số dương."));
      } else {
        setTimeout(() => {
          const result = input +  input;
          resolve(result);
        }, 1000); 
      }
    });
  }
  
  // Function A xuất kết quả hoặc nguyên nhân lỗi từ function B
  async function A(input) {
    try {
      const resultB = await B(input);
      console.log("Kết quả từ hàm B:", resultB);
      return resultB;
    } catch (error) {
      console.error("Đã có lỗi xảy ra:", error.message);
      return error.message;
    }
  }
  
  
  const input1 = 5; 
  const input2 = -3; 
  
  A(input1); 
  A(input2); 
  