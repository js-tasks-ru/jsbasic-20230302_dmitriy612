function factorial(n) {
  if (n === 0) {
    return 1;
  }

  let theProduct = 1;

  for (let i = n; i > 0; i--) {
    theProduct *= i;
  }

  return theProduct;
}
