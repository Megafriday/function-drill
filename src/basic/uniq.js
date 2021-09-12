const uniq = (arr) => {
	const set = new Set(arr);
	return [...set];
};

module.exports = uniq;

// console.log(uniq([2, 1, 2]));
// => [2, 1]