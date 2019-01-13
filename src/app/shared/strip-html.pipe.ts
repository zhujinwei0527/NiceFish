import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stripHtml'
})

export class StripHtmlPipe implements PipeTransform {
    constructor() { }

    transform(source: string): string {
        source = source ? source : "";
        return source.replace(/<[^>]+>/g, '');
    }
}
