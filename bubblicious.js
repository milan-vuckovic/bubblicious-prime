// Bubblicious Number
function isBubbliciousPrime(n) {
  // since 0 and 1 is not prime return false.
  if (n === 1 || n === 0) {
    return false;
  }

  // Run a loop from 2 to n-1
  for (let i = 2; i < n-1; i++) {
    //If the number is divisible by i, then n is not a prime number.
    if (n % i === 0) {
      return false;
    }
  }
  // otherwise, n is prime number.
  // and check if it is bubblicious
  return n.toString(16).slice(-1) === 'b'
}

function getBubbliciousPrimes(n) {
  // check for every number from 1 to n
  let result = [];
  if (typeof n === "number") {
    for (let i = 1; i <= n; i++) {
      // check if current number is bubblicious prime
      if (isBubbliciousPrime(i)) {
        result.push(i);
      }
    }
  } else {
    console.log("Provided argument is not a number");
  }
  return result;
}

const bubbliciousPrimes = getBubbliciousPrimes(100000);

console.log("The number of bubblicious primes from 1 to 100000 is:", bubbliciousPrimes.length);
