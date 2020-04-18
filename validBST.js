function isBinarySearchTree(treeRoot) {

  // Determine if the tree is a valid binary search tree
  const q = [{
    node: treeRoot,
    lowerBound: -Infinity,
    upperBound: Infinity
  }];
  
  while (q.length) {
    const {node, lowerBound, upperBound} = q.pop();
    
    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }
    
    if (node.left) {
      q.unshift({
        node: node.left,
        lowerBound,
        upperBound: node.value
      });
    }
    
    if (node.right) {
      q.unshift({
        node: node.right,
        lowerBound: node.value,
        upperBound
      });
    }
  }

  return true;
}