import { main } from './index';

describe('Day 01', () => {
	it('solve puzzle 01', () => {
		expect(main('example.txt').at(0)).toBe(24000);
		expect(main('data.txt').at(1)).toBe(204837);
	});

	it('solve puzzle 02', () => {
		expect(main('example.txt').at(1)).toBe(45000);
		expect(main('data.txt').at(1)).toBe(204837);
	});
});
