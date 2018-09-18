function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  for (let i = 0; i < arr.length; i++) {
      if(!arr[i]) {
          arr.splice(i, 1);
          console.log(i);
          i--;
      }
  }
  console.log(arr);
  return arr;
}

bouncer([7, "ate", "", false, 9]);