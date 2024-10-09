import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitals23'
})

export class Capitals23Pipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        if(typeof value == 'string') { return value.toUpperCase(); }
        else { return value }
    }
}