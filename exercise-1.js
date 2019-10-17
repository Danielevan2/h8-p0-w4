function angkaPrima(number) {
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}



// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false