import { describe, it, expect } from '@jest/globals';
import { puzzle1, puzzle2 } from '../index';

describe('day 01', () => {
	it('should return result for puzzle 1', () => {
		expect(puzzle1()).toEqual(1791);
	});

	it('should return result for puzzle 2', () => {
		expect(puzzle2()).toEqual(1822);
	});
});
