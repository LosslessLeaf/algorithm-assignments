function sumPrimes(num) {
	let primeArrays = [];
	let sum = 0;
	for (let i = 2; i <= num; i++) {
		if (isPrime(i) === true) {
			primeArrays.push(i);
		}
	}
	for (let i = 0; i < primeArrays.length; i++) {
		sum += primeArrays[i];
	}

	console.log(sum);
}

function isPrime(value) {
	for (var i = 2; i < value; i++) {
		if (value % i === 0) {
			return false;
		}
	}
	return value > 1;
}

sumPrimes(10);
