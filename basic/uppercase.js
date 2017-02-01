function capitalize(word){
  splitWord = word.split('');
  splitWord[0] = splitWord[0].toUpperCase();
  return splitWord.join('');
}

function titleCase(str) {
  str = str.toLowerCase();
  words = str.split(' ');
  return words.map(capitalize).join(' ');
}

titleCase("I'm a little tea pot");
