import { readFileSync } from 'fs';
import { join } from 'path';

export function loadDataFromPath(path: string) {
	return readFileSync(join(__dirname, path), 'utf-8');
}
