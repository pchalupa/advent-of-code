import { readFileSync } from 'fs';

const input = readFileSync('./input.txt', 'utf8').trim().split('\n');

function puzzle1() {
	let horizontal = 0;
	let depth = 0;
	enum Coordinates {
		Forward = 'forward',
		Down = 'down',
		Up = 'up',
	}

	input.forEach((line) => {
		const [direction, value] = line.split(' ');
		const valueInt = parseInt(value, 10);

		switch (direction) {
			case Coordinates.Forward:
				horizontal += valueInt;
				break;
			case Coordinates.Down:
				depth += valueInt;
				break;
			case Coordinates.Up:
				depth -= valueInt;
		}
	});

	const result = horizontal * depth;

	console.log('Puzzle1', result);

	return result;
}

function puzzle2() {
	let horizontal = 0;
	let depth = 0;
	let aim = 0;
	enum Coordinates {
		Forward = 'forward',
		Down = 'down',
		Up = 'up',
		Aim = 'aim',
	}

	input.forEach((line) => {
		const [direction, value] = line.split(' ');
		const valueInt = parseInt(value, 10);

		switch (direction) {
			case Coordinates.Forward:
				horizontal += valueInt;
				depth += valueInt * aim;
				break;
			case Coordinates.Down:
				aim += valueInt;
				break;
			case Coordinates.Up:
				aim -= valueInt;
		}
	});

	const result = horizontal * depth;

	console.log('Puzzle2', result);

	return result;
}

(() => {
	puzzle1();
	puzzle2();
})();
