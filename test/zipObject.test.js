const { describe, expect, test } = require('@jest/globals');
const zipObject = require('../src/basic/zipObject');

describe('zipObject関数のテスト', () => {

	test('同じ長さの配列のテスト', () => {
		expect(zipObject(['a', 'b'], [1, 2])).toEqual({ a: 1, b: 2 });
	});

	test('初めの配列が大きい場合のテスト', () => {
		expect(zipObject(['a', 'b', 'c'], [1, 2])).toEqual({ a: 1, b: 2, c: undefined });
	});

	test('後の配列が大きい場合のテスト', () => {
		expect(zipObject(['a', 'b'], [1, 2, 3])).toEqual({ a: 1, b: 2 });
	});
});

