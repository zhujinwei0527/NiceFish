import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'trim'
})

export class TrimStringPipe implements PipeTransform {
	constructor() { }

	transform(source: string): string {
		return source.replace(/\s+/g, "");
	}
}
