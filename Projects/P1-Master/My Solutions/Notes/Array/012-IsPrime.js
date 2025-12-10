const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
};
const primeNumbers = (N) => {
  let res = [];
  for (let i = 0; i < N; i++) {
    if (isPrime(i)) {
      res.push(i);
    }
  }
  return res.length;
};

console.log(primeNumbers(5));
let n = 5;
// var isPrime = function (n) {
//   if (n < 2) return;
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }
//   return true;
// };
var primesFn = function (n) {
  // let primes =[]
  // for(let i=0;i<n;i++){
  //     console.log(isPrime(i))
  //     if(isPrime(i)){
  //         primes.push(i)
  //     }
  // }
  // console.log(primes)

  let primes = [];
  let number = 2;
  while (primes.length < n) {
    console.log(isPrime(number));
    if (isPrime(number)) {
      primes.push(number);
    }
    number++;
  }
  console.log(primes);
};

primesFn(4);
