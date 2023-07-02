function buildTree(nodes) {
    var tree = [];
    var nodeMap = {};
  
    nodes.forEach(function(node) {
      node.children = [];
      nodeMap[node.id] = node;
    });
  
    nodes.forEach(function(node) {
      if (node.parent_id) {
        nodeMap[node.parent_id].children.push(node);
      } else {
        tree.push(node);
      }
    });
  
    return tree;
  }
  