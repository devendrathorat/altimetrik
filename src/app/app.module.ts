import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchdocumentComponent } from './searchdocument/searchdocument.component';
import { FormsModule } from '@angular/forms';
import { SearchdocumentPipe } from './searchdocument.pipe';  

@NgModule({
  declarations: [
    AppComponent,
    SearchdocumentComponent,
    SearchdocumentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
