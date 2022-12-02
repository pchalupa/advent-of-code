import { main } from './index';

describe('Day 02', () => {
	it.skip.each([
		['example.txt', 15],
		['data.txt', 14297],
	])('solve puzzle 01 with %s result in %s', (path, result) => {
		expect(main(path).at(0)).toBe(result);
	});

	it.each([
		['example.txt', 12],
		['data.txt', 10498],
	])('solve puzzle 02 with %s result in %s', (path, result) => {
		expect(main(path).at(1)).toBe(result);
	});
});
