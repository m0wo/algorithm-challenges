function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  count = 0;
  letters = arr[1].split('');
  letters.forEach(function(letter){
    pos = arr[0].indexOf(letter);
    if(pos !== -1){
      count++;
    }
  });

  return count == arr[1].length;
}

console.log(mutation(["hello", "hey"]));
