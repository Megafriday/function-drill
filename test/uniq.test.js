const { describe, expect, test } = require('@jest/globals');
const uniq = require('../src/basic/uniq');
const take = require('../src/basic/take');

describe("uniq関数のテスト", () => {
	test("正常系のテスト", () => {
		expect(uniq([2, 1, 2])).toEqual([2, 1]);
	});

	test("正常系のテスト", () => {
		expect(uniq([2, 1, 2, 1, 1, 2])).toEqual([2, 1]);
	});

	test("正常系のテスト", () => {
		expect(uniq([2, 1, 3, 4, 1, 2])).toEqual([2, 1, 3, 4]);
	});

	test("異常系のテスト", () => {
		expect(uniq([])).toEqual([]);
	});

});
