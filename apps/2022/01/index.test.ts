import { main } from './index';

describe('Day 01', () => {
	it.each([
		['example.txt', 24000],
		['data.txt', 68442],
	])('solve puzzle 01 with %s result in %s', (path, result) => {
		expect(main(path).at(0)).toBe(result);
	});

	it.each([
		['example.txt', 45000],
		['data.txt', 204837],
	])('solve puzzle 02 with %s result in %s', (path, result) => {
		expect(main(path).at(1)).toBe(result);
	});
});
