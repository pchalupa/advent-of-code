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

export function main(path: string) {
	const result = [0, 0];

	try {
		const data = loadDataFromPath(join(__dirname, path));
		const steps = parseData(data);

		//* Puzzle 01
		result[0] = steps.reduce((res, [opponent, me]) => res + evaluatePoints(opponent, me), 0);

		//* Puzzle 02
		// @ts-ignore
		result[1] = steps.reduce((res, [opponent, gameEnd]) => res + puzzle2(opponent, gameEnd), 0);
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

function evaluatePoints(opponent: string, me: string) {
	// @ts-ignore
	const opponentAction = PLAY[opponent];

	// @ts-ignore
	const myAction = PLAY[me];

	const points = getPoints(opponentAction, myAction);

	return points;
}

function getPoints(opponentAction: Action, myAction: Action) {
	if (myAction === Action.Rock && opponentAction === Action.Rock) return Point.Draw + 1;
	if (myAction === Action.Rock && opponentAction === Action.Paper) return Point.Lose + 1;
	if (myAction === Action.Rock && opponentAction === Action.Scissors) return Point.Win + 1;

	if (myAction === Action.Paper && opponentAction === Action.Rock) return Point.Win + 2;
	if (myAction === Action.Paper && opponentAction === Action.Paper) return Point.Draw + 2;
	if (myAction === Action.Paper && opponentAction === Action.Scissors) return Point.Lose + 2;

	if (myAction === Action.Scissors && opponentAction === Action.Rock) return Point.Lose + 3;
	if (myAction === Action.Scissors && opponentAction === Action.Paper) return Point.Win + 3;
	if (myAction === Action.Scissors && opponentAction === Action.Scissors) return Point.Draw + 3;

	return Point.Draw;
}

function puzzle2(opponentAction: 'A' | 'B' | 'C', result: 'Y' | 'X' | 'Z') {
	let points = 0;

	if (result === 'Y') points += Point.Draw;
	if (result === 'X') points += Point.Lose;
	if (result === 'Z') points += Point.Win;

	if (result === 'Y') points = points + SCORE[getAction(opponentAction)];
	if (result === 'Z') {
		if (Action.Paper === getAction(opponentAction)) points = points + SCORE[Action.Scissors];
		if (Action.Rock === getAction(opponentAction)) points = points + SCORE[Action.Paper];
		if (Action.Scissors === getAction(opponentAction)) points = points + SCORE[Action.Rock];
	}
	if (result === 'X') {
		if (Action.Paper === getAction(opponentAction)) points = points + SCORE[Action.Rock];
		if (Action.Rock === getAction(opponentAction)) points = points + SCORE[Action.Scissors];
		if (Action.Scissors === getAction(opponentAction)) points = points + SCORE[Action.Rock];
	}

	return points;

	/*
			steps.forEach((item) => {
			let c = 0;

			const [them, me] = item;

			if (me === 'X') c += 0;
			if (me === 'Y') c += 3;
			if (me === 'Z') c += 6;

			let more = vals.findIndex((t) => t === them)! + 1;

			if (me === 'X') more -= 1;
			if (me === 'Z') more += 1;
			more = more % 3;
			c += more;

			if (more === 0) {
				c += 3;
			}

			score += c;
		});
		*/
}

function getAction(action: string): Action {
	// @ts-ignore
	return PLAY[action];
}

function getPointsFromResult(result: 'Y' | 'X' | 'Z') {}
