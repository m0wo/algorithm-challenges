function isFalsy(val) {
  return Boolean(val);
}


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(isFalsy);
}

bouncer([7, "ate", "", false, 9]);
