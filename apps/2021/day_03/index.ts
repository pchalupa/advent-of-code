import { readFileSync } from 'fs';

const input = readFileSync('./input.txt', 'utf8').split('\n');

function puzzle1() {
	let gamma = [],
		epsilon = [];
	const inputs = input.map((line) => line.split(''));

	for (let i = 0; i < inputs[0].length; i++) {
		let ones = 0,
			zeros = 0;

		inputs.forEach((line) => {
			if (line[i] === '1') ones++;
			else zeros++;
		});

		if (ones > zeros) {
			gamma.push(1);
			epsilon.push(0);
		} else {
			gamma.push(0);
			epsilon.push(1);
		}
	}

	const result = parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2);

	console.log('Puzzle1', result);

	return result;
}

function puzzle2() {
	const parseInput = (getCo2?: boolean) => {
		let inputs = input.map((line) => line.split(''));
		const compare = (ones: number, zeros: number) =>
			getCo2 ? (zeros <= ones ? '0' : '1') : ones >= zeros ? '1' : '0';

		for (let i = 0; i < inputs[0].length; i++) {
			let ones = 0,
				zeros = 0;

			inputs.forEach((line) => {
				if (line[i] === '1') ones++;
				else zeros++;
			});

			const result = compare(ones, zeros);

			inputs = inputs.filter((line) => line[i] === result);

			if (inputs.length === 1) break;
		}

		const result = inputs.pop() || [];

		return parseInt(result.join(''), 2);
	};

	const oxygen = parseInput();
	const c02 = parseInput(true);
	const result = oxygen * c02;

	console.log('Puzzle2', result);

	return result;
}

(() => {
	puzzle1();
	puzzle2();
})();
