const { describe, expect, test } = require('@jest/globals');
const take = require('../src/basic/take');

describe("take関数のテスト", () => {
	test("正常系のテスト", () => {
		expect(take([1, 2, 3])).toEqual([1]);
		expect(take([1, 2, 3], 2)).toEqual([1, 2]);
		expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
		expect(take([1, 2, 3], 0)).toEqual([]);
	});

	test("異常系のテスト", () => {
		expect(take()).toEqual([]);
	});
});