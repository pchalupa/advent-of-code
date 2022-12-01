import { readFileSync } from 'fs';

export function loadDataFromPath(path: string) {
	return readFileSync(path, 'utf-8');
}
