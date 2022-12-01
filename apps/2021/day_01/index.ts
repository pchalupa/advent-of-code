import { readFileSync } from 'fs';
import { add } from '../utils';

const data = readFileSync('./data.txt', 'utf8').split('\n').map(Number);

//* Part 1
export function puzzle1() {
	const result = data.reduce((sum, value, index, array) => {
		if (value > array[index - 1]) return sum + 1;

		return sum;
	}, 0);

	console.log('Result1:', result);
	return result;
}

export function puzzle2() {
	//* Part 2
	const windows = data.reduce((acc: number[][], _, index, array) => {
		const window = array.slice(index, index + 3);

		if (window.length === 3) acc.push(window);

		return acc;
	}, []);

	const result = windows.reduce((sum, value, index, array) => {
		if (value && array[index + 1]) {
			const currentWindow = add(value);
			const nextWindow = add(array[index + 1]);

			if (currentWindow < nextWindow) return sum + 1;
		}

		return sum;
	}, 0);

	console.log('Result2:', result);
	return result;
}

(() => {
	puzzle1();
	puzzle2();
})();
