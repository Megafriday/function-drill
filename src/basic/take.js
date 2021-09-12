const take = (arr = [], value = 1) => {
	const result = [];
	for (let i = 0; i < value; i++) {
		if (arr[i] === undefined) break;
		result.push(arr[i]);
	}
	return result;
};

module.exports = take;

// console.log(take([1, 2, 3]));
// => [1]

// console.log(take([1, 2, 3], 2));
// => [1, 2]

// console.log(take([1, 2, 3], 5));
// => [1, 2, 3]

// console.log(take([1, 2, 3], 0));
// => []