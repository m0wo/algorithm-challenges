function repeatStringNumTimes(str, num) {
  arr = [];

  for(i = 0; i < num; i++){
    arr.push(str);
  }
  return arr.join('');
}

repeatStringNumTimes("abc", 3);
