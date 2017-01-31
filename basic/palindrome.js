function palindrome(str) {
  cleanString = str.toLowerCase()
  .replace(/[`~!@#$%^&*()_|\s+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

  if(cleanString.split('').reverse().join('') == cleanString){
    return true;
  }

  return false;
}
