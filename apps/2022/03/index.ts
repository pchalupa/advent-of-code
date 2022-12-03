import { join } from 'path';
import { loadDataFromPath } from 'utils';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function main(path: string) {
	const result = [0, 0];

	try {
		const data = loadDataFromPath(join(__dirname, path));
		const lines = parseData(data);

		//* Puzzle 01
		result[0] = puzzle1(lines);

		//* Puzzle 02
		result[1] = puzzle2(lines);
	} catch (error) {
		process.exitCode = 1;
		console.log(error);
	}

	return result;
}

function parseData(data: string) {
	const lines = data.split('\n');

	return lines.map((line) => {
		const count = line.length;
		const middleIndex = count / 2;
		const left = line.slice(0, middleIndex);
		const right = line.slice(middleIndex, count);

		return [left, right];
	});
}

function puzzle1(lines: string[][]) {
	return lines.reduce((result, [left, right]) => {
		const leftItems: string[] = left.split('').sort();
		const rightItems: string[] = right.split('').sort();
		const matchingLetter = leftItems.reduce((match, letter) => {
			if (rightItems.includes(letter)) return letter;

			return match;
		});

		return result + getNumberFromLetter(matchingLetter);
	}, 0);
}

function puzzle2(lines: string[][]) {
	const fullLines = lines.map((line) => line.join(''));
	const groups = [];

	for (let i = 0; i < fullLines.length; i += 3) {
		groups.push(fullLines.slice(i, i + 3));
	}

	return groups.reduce((res, group) => {
		const first = group[0].split('').sort();
		const second = group[1].split('').sort();
		const third = group[2].split('').sort();

		const match = first.reduce((foo, letter) => {
			if (second.includes(letter) && third.includes(letter)) return letter;

			return foo;
		}, '');

		return getNumberFromLetter(match) + res;
	}, 0);
}

function getNumberFromLetter(letter: string) {
	return ALPHABET.indexOf(letter) + 1;
}
