function truncateString(str, num) {
  if(str.length > num) {
    sliced = str.slice(0, num);
    if(sliced.length > 2)
      return sliced.replace(sliced.substr(-3), '...');

    return sliced.concat('...');
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
