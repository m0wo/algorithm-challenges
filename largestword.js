function findLongestWord(str) {
  largest = 0;

  str.split(' ').forEach(function(word){
    if(word.length > largest)
      largest = word.length;
  });

  return largest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
