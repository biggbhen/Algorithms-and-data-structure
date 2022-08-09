// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer(arr, ...arg) {
	let argArr = [...arg];
	let newarr = [];

	arr.forEach((element) => {
		let filtered = false;
		argArr.forEach((item) => {
			if (item === element) {
				filtered = true;
			}
		});
		if (!filtered) {
			newarr.push(element);
		}
	});
	// console.log(newarr);
	return newarr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
