import { Component } from "@angular/core";

@Component({
    selector: 'pm-dances',
    templateUrl: './dance-list.component.html'
})
export class DanceListComponent{
    pageTitle: string = "Dance Style List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    filterText: string = "";
    dances: any[] = [{
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

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}