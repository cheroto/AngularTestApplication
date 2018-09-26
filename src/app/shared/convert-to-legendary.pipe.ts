import { Pipe, PipeTransform } from "@angular/core";
@Pipe({   
     name: 'convertToLegendary'
})
export class ConvertToLegendary implements PipeTransform{
    transform(value: string): string {
        return value.replace(value, 'Legendary ' + value);
    }
}