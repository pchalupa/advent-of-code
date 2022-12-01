import { readFileSync } from 'fs';

const input = readFileSync('./input.txt', 'utf-8').split(',').map(Number);

function puzzle1() {
	const max = input.reduce((acc, curr) => Math.max(acc, curr), 0);
	const min = input.reduce((acc, curr) => Math.min(acc, curr), 0);
	const consuption: number[] = [];

	for (let i = min; i <= max; i++) {
		const res = input.reduce((fuel, position) => {
			fuel = fuel + Math.abs(position - i);

			return fuel;
		}, 0);

		consuption.push(res);
	}

	return consuption.reduce((acc, curr) => Math.min(acc, curr));
}

function puzzle2() {
	const max = input.reduce((acc, curr) => Math.max(acc, curr), 0);
	const min = input.reduce((acc, curr) => Math.min(acc, curr), 0);
	const consuption: number[] = [];

	for (let i = 5; i <= max; i++) {
		const res = input.reduce((fuel, position) => {
			const steps = Math.abs(position - i);

			const snap = Array(steps)
				.fill(0)
				.reduce((sum, _, index) => sum + (index + 1), 0);

			fuel = fuel + snap;

			return fuel;
		}, 0);

		consuption.push(res);
	}

	return consuption.reduce((acc, curr) => Math.min(acc, curr));
}

(() => {
	const result1 = puzzle1();
	const result2 = puzzle2();

	console.log('Puzzle1:', result1);
	console.log('Puzzle2:', result2);
})();
