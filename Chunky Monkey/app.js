// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
	let newArr = [];
	for (let i = 0; i < arr.length; i += size) {
		newArr.push(arr.slice(i, i + size));
	}
	return newArr;

	// for (let i = 0; i < arr.length; i += size) {
	// 	console.log(arr.slice(i, i + size));
	// }
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
