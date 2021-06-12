function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'not a prime number'

        }
    }
    return 'You number is a prime number'
}

var result = isPrime(149)

console.log(result)