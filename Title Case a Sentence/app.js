// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
	let newStr = str.toLowerCase();
	let newArr = [];
	newStr.split(' ').filter((item) => {
		newArr.push(item[0].toUpperCase() + item.slice(1));
		// console.log();
	});
	return newArr.join(' ');
}
console.log(titleCase("I'm a little tea pot"));
