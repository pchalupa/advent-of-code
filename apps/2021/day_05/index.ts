import { readFileSync } from 'fs';

const input = readFileSync('./input.txt', 'utf-8')
	.split('\n')
	.map((line) => line.split(' -> '))
	.map((match) => match?.map((coord) => coord.split(',').map(Number)));

function puzzle1() {
	let lines: number[][][] = [];

	const createLine = (p1: number[], p2: number[]) => {
		const [x1, y1] = p1;
		const [x2, y2] = p2;
		const distance: number[][] = [[x1, y1]];

		let x: number = x1;
		let y: number = y1;

		while (x !== x2 || y !== y2) {
			x = x !== x2 ? (x <= x2 ? x + 1 : x - 1) : x;
			y = y !== y2 ? (y <= y2 ? y + 1 : y - 1) : y;

			distance.push([x, y]);
		}

		return distance;
	};

	input.forEach((line) => {
		if (line) {
			const [p1, p2] = line;

			if (p1[0] === p2[0] || p1[1] === p2[1]) {
				lines.push(createLine(p1, p2));
			}
		}
	});

	const matrix = lines.reduce((matrix: Record<string, number>, line) => {
		line.forEach((point) => {
			const [x, y] = point;
			matrix[`${x},${y}`] = matrix[`${x},${y}`] ? matrix[`${x},${y}`] + 1 : 1;
		});

		return matrix;
	}, {});

	const result = Object.values(matrix).filter((value) => value > 1).length;

	return result;
}

function puzzle2() {
	let lines: number[][][] = [];

	const createLine = (p1: number[], p2: number[]) => {
		const [x1, y1] = p1;
		const [x2, y2] = p2;
		const distance: number[][] = [[x1, y1]];

		let x: number = x1;
		let y: number = y1;

		while (x !== x2 || y !== y2) {
			x = x !== x2 ? (x <= x2 ? x + 1 : x - 1) : x;
			y = y !== y2 ? (y <= y2 ? y + 1 : y - 1) : y;

			distance.push([x, y]);
		}

		return distance;
	};

	input.forEach((line) => {
		if (line) {
			const [p1, p2] = line;

			lines.push(createLine(p1, p2));
		}
	});

	const matrix = lines.reduce((matrix: Record<string, number>, line) => {
		line.forEach((point) => {
			const [x, y] = point;
			matrix[`${x},${y}`] = matrix[`${x},${y}`] ? matrix[`${x},${y}`] + 1 : 1;
		});

		return matrix;
	}, {});

	const result = Object.values(matrix).filter((value) => value > 1).length;

	return result;
}

(() => {
	const result1 = puzzle1();
	const result2 = puzzle2();

	console.log('Result 1:', result1);
	console.log('Result 2:', result2);
})();
