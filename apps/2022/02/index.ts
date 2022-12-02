import { join } from 'path';
import { loadDataFromPath, sum, getMax } from 'utils';

enum Point {
	Lose = 0,
	Draw = 3,
	Win = 6,
}

enum Action {
	Rock = 'rock',
	Paper = 'paper',
	Scissors = 'scissors',
}

const PLAY = {
	A: Action.Rock,
	B: Action.Paper,
	C: Action.Scissors,
	Y: Action.Paper,
	X: Action.Rock,
	Z: Action.Scissors,
};

const SCORE = {
	[Action.Rock]: 1,
	[Action.Paper]: 2,
	[Action.Scissors]: 3,
};
/*
	opp/me		rock	paper	scissors
	rock		0		1		-1
	paper		-1		0		1
	scissors	1		-1		0
*/

const INDEXES = [Action.Rock, Action.Paper, Action.Scissors];

const COMBINATIONS = [
	[0, 1, -1],
	[-1, 0, 1],
	[1, -1, 0],
];

function getIndex(item: Action) {
	return INDEXES.indexOf(item);
}

export function main(path: string) {
	const result = [0, 0];

	try {
		const data = loadDataFromPath(join(__dirname, path));
		const steps = parseData(data);

		//* Puzzle 01
		result[0] = puzzle1(steps);

		//* Puzzle 02
		// @ts-ignore
		result[1] = puzzle2(steps);
	} catch (error) {
		process.exitCode = 1;
		console.log(error);
	}

	return result;
}

function parseData(data: string) {
	const lines = data.split('\n');

	return lines.map((line) => line.split(' '));
}

function puzzle1(steps: string[][]) {
	return steps.reduce((res, [opponent, me]) => {
		let points = 0;
		const a = getIndex(getAction(opponent));
		const b = getIndex(getAction(me));
		const matchResult = COMBINATIONS[a][b];

		if (matchResult === -1) points = points + Point.Lose;
		if (matchResult === 0) points = points + Point.Draw;
		if (matchResult === 1) points = points + Point.Win;

		return res + points + b + 1;
	}, 0);
}

function puzzle2(steps: string[][]) {
	return steps.reduce((res, [opponent, result]) => {
		let points = 0;
		const a = getIndex(getAction(opponent));
		const matchResult = result === 'Y' ? 0 : result === 'X' ? -1 : result === 'Z' ? 1 : 0;
		const myAct = COMBINATIONS[a].findIndex((foo) => foo === matchResult);

		if (matchResult === -1) points = points + Point.Lose;
		if (matchResult === 0) points = points + Point.Draw;
		if (matchResult === 1) points = points + Point.Win;

		return res + myAct + 1 + points;
	}, 0);
}

function getAction(action: string): Action {
	// @ts-ignore
	return PLAY[action];
}
