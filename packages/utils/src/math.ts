export function sum(input: number[]) {
	return input.reduce((result, value) => result + value, 0);
}

export function getMax(input: number[]) {
	return Math.max(...input);
}
