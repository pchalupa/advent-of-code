import { main } from './index';

describe('Day 03', () => {
	it.skip.each([
		['example.txt', 157],
		['data.txt', 7903],
	])('solve puzzle 01 with %s result in %s', (path, result) => {
		expect(main(path).at(0)).toBe(result);
	});

	it.each([
		['example.txt', 70],
		['data.txt', 2548],
	])('solve puzzle 02 with %s result in %s', (path, result) => {
		expect(main(path).at(1)).toBe(result);
	});
});
