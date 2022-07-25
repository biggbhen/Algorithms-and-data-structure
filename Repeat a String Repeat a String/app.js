// Repeat a String Repeat a String
// // Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
	let newArr = [];
	for (let i = 1; i <= num; i++) {
		newArr.push(str);
	}
	return newArr.join('');
	// console.log(newArr.join(''));
}
console.log(repeatStringNumTimes('abc', 3));
