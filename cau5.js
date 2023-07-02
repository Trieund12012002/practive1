// Dữ liệu mẫu có quan hệ cha con (id, parent_id)
const data = [
    { id: 1, parent_id: null },
    { id: 2, parent_id: 1 },
    { id: 3, parent_id: 1 },
    { id: 4, parent_id: 2 },
    { id: 5, parent_id: 2 },
    { id: 6, parent_id: 3 },
  ];
  
  // Hàm tạo cây từ dữ liệu có quan hệ cha con
  function buildTree(data) {
    const tree = {};
  
    data.forEach((node) => {
      const { id, parent_id } = node;
  
      if (parent_id === null) {
        // Nếu nút không có parent_id, đây là nút gốc
        tree[id] = { ...node, children: [] };
      } else {
        // Nếu nút có parent_id, thêm vào danh sách con của nút cha tương ứng
        if (!tree[parent_id]) {
          tree[parent_id] = { children: [] };
        }
        tree[parent_id].children.push({ ...node, children: [] });
      }
    });
  
    return tree;
  }
  
  // Sử dụng hàm để tạo cây từ dữ liệu mẫu
  const tree = buildTree(data);
  
  console.log(tree);
  