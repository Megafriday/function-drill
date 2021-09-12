zipObject = (key = [], value = []) => {

	const result = {};
	for (let i = 0; i < key.length; i++) {
		result[key[i]] = value[i];
	}

	return result;
};

module.exports = zipObject;

// console.log(zipObject(['a', 'b'], [1, 2]));
// => { 'a': 1, 'b': 2 }