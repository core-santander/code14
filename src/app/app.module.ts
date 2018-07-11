import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectivangforComponent } from './directivangfor/directivangfor.component';
import { DirectivangifComponent } from './directivangif/directivangif.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivangforComponent,
    DirectivangifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
