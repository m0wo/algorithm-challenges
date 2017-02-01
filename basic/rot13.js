function rot13(str) { // LBH QVQ VG!
  converted = [];

  str.split('').forEach(function(char){
    charCode = char.charCodeAt(0);

    if (charCode < 65 || charCode > 90) {
      converted.push(String.fromCharCode(charCode));
    }

    else if(charCode < 78) {
      converted.push(String.fromCharCode(charCode + 13));
    }
    else {
      converted.push(String.fromCharCode(charCode - 13));
    }
  });

  return converted.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
