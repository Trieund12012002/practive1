const data = [
    { id: 1, parent_id: null },
    { id: 2, parent_id: 1 },
    { id: 3, parent_id: 1 },
    { id: 4, parent_id: 2 },
    { id: 5, parent_id: 2 },
    { id: 6, parent_id: 3 },
  ];
  
  function buildTree(data) {
    const tree = {};
  
    data.forEach((node) => {
      const { id, parent_id } = node;
  
      if (parent_id === null) {
        tree[id] = { ...node, children: [] };
      } else {
        if (!tree[parent_id]) {
          tree[parent_id] = { children: [] };
        }
        tree[parent_id].children.push({ ...node, children: [] });
      }
    });
  
    return tree;
  }
  
  const tree = buildTree(data);
  console.log(tree);
  
