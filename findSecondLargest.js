function findLargest(root) {
  let current = root;
  while (current) {
    if (!current.right) {
      return current.value;
    }
    
    current = current.right;
  }
}

function findSecondLargest(treeRoot) {

  // Find the second largest item in the binary search tree
  if (!treeRoot || (!treeRoot.left && !treeRoot.right)) {
    throw new Error('Tree must have atleast 2 nodes');
  }
  
  let current = treeRoot;
  
  while (current) {
    //if the largest element has a subtree
    
    if (current.left && !current.right) {
      return findLargest(current.left);
    }
    
    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }
      
      current = current.right;
    }
}