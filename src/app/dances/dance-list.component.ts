import { Component, OnInit } from "@angular/core";
import { IDance } from "./dance"

@Component({
    selector: 'pm-dances',
    templateUrl: './dance-list.component.html',
    styleUrls: ['./dance-list.component.css']
})
export class DanceListComponent implements OnInit{
    pageTitle: string = "Dance Style List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    _filterText: string;
    public get filterText() : string {
        return this._filterText;
    }
    
    public set filterText(value: string) {
        this._filterText = value;
        this.filteredDances = this._filterText ? this.filterDances(this._filterText) : this.dances;
    }        

    filteredDances: IDance[];
    dances: IDance[] = [{
        "styleId": 1,
        "styleName":"Forró",
        "styleCountry":"Brazil",
        "availableInTo":"Yes",
        "description":"Northern Brazilian Style of Dancing. Pretty Awesome.",
        "price":50,
        "starRating":5,
        "imageUrl": "http://i2.wp.com/vozdoplanalto.com.br/wp-content/uploads/2017/10/forro.jpg"
    },
    {
        "styleId": 2,
        "styleName":"Zouk",
        "styleCountry":"Brazil",
        "availableInTo":"Yes",
        "description":"Brazilian Style of Dancing. Pretty Awesome.",
        "price":100,
        "starRating":4.5,
        "imageUrl": "https://ccsu.co.uk/asset/Organisation/7200/14249134_10205410620383492_1237855432_n.jpg"
    }];

    constructor() {
        this.filteredDances = this.dances;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    filterDances(filterText: string): IDance[]{
        filterText = filterText.toLocaleLowerCase();
        return this.dances.filter((dance: IDance) =>
            dance.styleName.toLocaleLowerCase().indexOf(filterText) !== -1);
    }

    ngOnInit(): void {
        console.log("On Init Method");
    }
}