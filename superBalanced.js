function isBalanced(treeRoot) {
  const depths = [];
  const nodes = [];
  
  nodes.push([treeRoot, 0]);
  
  while (nodes.length) {
    const [node, depth] = nodes.pop();
    
    if (node.left === null && node.right === null) {
      
      if (depths.indexOf(depth) < 0) {
        depths.push(depth)
        
        if (depths.length > 2 || 
            (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
              return false;
        }
      }
    } else {
      if (node.left) {
        nodes.push([node.left, depth + 1])
      }
      
      if (node.right) {
        nodes.push([node.right, depth + 1])
      }
    }
  }
  
  return true;
}