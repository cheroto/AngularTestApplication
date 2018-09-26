import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DanceListComponent } from './dances/dance-list.component';
import { ConvertToLegendary} from './shared/convert-to-legendary.pipe'

@NgModule({
  declarations: [
    AppComponent,
    DanceListComponent,
    ConvertToLegendary
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
