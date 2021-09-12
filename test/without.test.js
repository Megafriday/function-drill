const { describe, expect, test } = require('@jest/globals');
const without = require('../src/basic/without');

describe("without関数のテスト", () => {
	test("正常系のテスト", () => {
		expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
	});

	test("対象がない場合のテスト", () => {
		expect(without([2, 1, 2, 3], 0)).toEqual([2, 1, 2, 3]);
	});

	test("引数がない場合のテスト", () => {
		expect(without([2, 1, 2, 3])).toEqual([2, 1, 2, 3]);
	});

	test("全て対象のテスト", () => {
		expect(without([2, 1, 2, 3], 3, 2, 1)).toEqual([]);
	});
});
