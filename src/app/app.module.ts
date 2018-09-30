import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { JQuery } from 'node_modules/jquery';
// import { BootstrapModule } from 'node_modules/bootstrap';

import { AppComponent } from './app.component';
import { CrudTableComponent } from './crud-table/crud-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // BootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
