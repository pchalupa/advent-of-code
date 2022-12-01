export const add = (data: number[]) => data.reduce((sum: number, value: number) => sum + value);

export const getMatrix = (length: number, fill: number = 0) =>
	Array.from(Array(length), () => Array.from(Array(length).fill(fill)));
