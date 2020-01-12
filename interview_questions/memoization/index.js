function isPrime(n) {
  if (!isPrime.answers) {
    isPrime.answers = {};
  }

  if (isPrime.answers[n] !== undefined) {
    return isPrime.answers[n];
  }

  let prime = n !== 1;

  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      prime = false;
      break;
    }
  }

  return (isPrime.answers[n] = prime);
}

module.exports = isPrime;
