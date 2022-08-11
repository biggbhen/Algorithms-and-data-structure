// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
	let n1 = 0,
		n2 = 1,
		nextTerm,
		result = 0;

	for (let i = 1; i <= num; i++) {
		nextTerm = n1 + n2;
		n1 = n2;
		n2 = nextTerm;

		if (n1 % 2 !== 0 && n1 <= num) {
			result += n1;
		}
	}
	// console.log(result);
	return result;
}

// sumFibs(5);
sumFibs(15);
