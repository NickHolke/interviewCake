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
      q.push({
        node: node.left,
        lowerBound,
        upperBound: node.value
      });
    }
    
    if (node.right) {
      q.push({
        node: node.right,
        lowerBound: node.value,
        upperBound
      });
    }
  }

  return true;
}

function isBinarySearchTree(node, lowerBound, upperBound) {
  lowerBound = lowerBound === undefined ? -Infinity : lowerBound;
  upperBound = upperBound === undefined ? Infinity : upperBound;

  if (!node) {
    return true;
  }

  if (node.value >= lowerBound || node.value <= upperBound) {
    return false;
  }

  return isBinarySearchTree(node.left, lowerBound, node.value) &&
         isBinarySearchTree(node.right, node.value, upperBound);
}