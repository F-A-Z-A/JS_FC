// ------------EXERCISE #2------------

const areArraysSame = (arr_1, arr_2) => {
	if (arr_1.length !== arr_2.length) {
		return false;
	}
	for (let i = 0; i < arr_1.length; i++) {
		if (arr_1[i] !== arr_2[i]) {
			return false;
		}
	}
	return true;
	// --- or ---
	// arr_1 = arr_1.join('');
	// arr_2 = arr_2.join('');
	// return arr_1 === arr_2;
}

console.log(areArraysSame([1, 2, 3], [1, 2, 4]));
