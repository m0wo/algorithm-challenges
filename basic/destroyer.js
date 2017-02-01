function destroyer(arr) {
  // Remove all the values
  args = Array.from(arguments);
  return arr.filter(function(item){
    return args.indexOf(item) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
