// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
	let newArr = [];
	str.split(' ').map((word) => {
		newArr.push(word.length);
	});
	return Math.max(...newArr);
	// console.log(...newArr)
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
