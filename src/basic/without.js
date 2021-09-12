
const without = (array = [], ...values) => {
	return array.filter(i => !values.includes(i));
};

module.exports = without;

// console.log(without([2, 1, 2, 3], 1, 2));
// => [3]