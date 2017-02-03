function sumAll(arr) {
  start = Math.min(...arr);
  end = Math.max(...arr);

  numbers = [];
  for(i = start; i <= end; i++) {
    numbers.push(i);
  }

  var sum = numbers.reduce(function(a, b){
    return a + b;
  }, 0);

  return sum;
}

sumAll([1, 4]);
