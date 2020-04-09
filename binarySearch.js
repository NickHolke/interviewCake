const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  if (arr.length < 1) {
      throw new Error('Array length must be greater than 0');
  }

  if (start > end) {
      return false;
  }

  let midIdx = Math.floor((start + end) / 2);

  if (arr[midIdx] === target) {
      return true;
  } else if (arr[midIdx] < target) {
      return binarySearch(arr, target, midIdx + 1, end);
  } else {
      return binarySearch(arr, target, start, midIdx - 1);
  }
}

const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  while (start < end) {
      let midIdx = Math.floor((start + end) / 2);
      if (arr[midIdx] === target) {
          return true;
      } else if (arr[midIdx] < target) {
          start = midIdx + 1;
      } else {
          end = midIdx - 1;
      }
  }

  return false;
}