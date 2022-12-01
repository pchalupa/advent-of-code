import { loadDataFromPath, sum, getMax } from 'utils';

export function main(path: string) {
	const result = [0, 0];

	try {
		const data = loadDataFromPath(path);
		const caloriesByElves = getAggregatedCaloriesByElves(data);

		//* Puzzle 01
		result[0] = getMax(caloriesByElves.map(sum));

		//* Puzzle 02
		result[1] = sum(
			caloriesByElves
				.map(sum)
				.sort((a, b) => b - a)
				.splice(0, 3)
		);
	} catch (error) {
		process.exitCode = 1;
		console.log(error);
	}

	return result;
}

function getAggregatedCaloriesByElves(data: string) {
	const lines = data.split('\n\n');

	return lines.map((line) => line.split('\n').filter(Boolean).map(Number));
}
