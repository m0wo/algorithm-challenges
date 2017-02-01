function largestOfFour(arr) {
  _arr = [];

  arr.forEach(function(__arr){
    largest = 0;
    __arr.forEach(function(item){
      if(item > largest){
        largest = item;
      }
    });
    _arr.push(largest);
  });

  return _arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
