function chunkArrayInGroups(arr, size) {
  _arr = [];
  for(i = 0; i < arr.length; i += size){
    _arr.push(arr.slice(i, i + size));
  }
  return _arr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
