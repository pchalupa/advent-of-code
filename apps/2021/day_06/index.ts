import { readFileSync } from 'fs';

const input = readFileSync('./input.txt', 'utf-8').split(',').map(Number);

function puzzle1() {
	let output = input;

	const simulation = (dataset: number[]) => {
		dataset.forEach((clock, index) => {
			if (dataset[index] === 0) {
				dataset.push(8);
				dataset[index] = 6;
			} else {
				dataset[index] = clock - 1;
			}
		});

		return dataset;
	};

	for (let i = 1; i <= 80; i++) {
		output = simulation(output);
	}

	return output.length;
}

function puzzle2() {
	let stateMap = {
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
		8: 0,
	};

	// @ts-ignore
	input.forEach((value) => stateMap[value]++);

	for (let i = 1; i <= 256; i++) {
		const snap = {
			0: stateMap[1],
			1: stateMap[2],
			2: stateMap[3],
			3: stateMap[4],
			4: stateMap[5],
			5: stateMap[6],
			6: stateMap[7] + stateMap[0],
			7: stateMap[8],
			8: stateMap[0],
		};

		stateMap = snap;
	}

	return Object.values(stateMap).reduce((sum, value) => sum + value);
}

(() => {
	const result1 = puzzle1();
	const result2 = puzzle2();

	console.log('Result 1', result1);
	console.log('Result 2', result2);
})();
