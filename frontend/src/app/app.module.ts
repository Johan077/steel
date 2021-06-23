import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LibrosComponent } from './components/libros/libros.component';
import { AutoresComponent } from './components/autores/autores.component';
import { EditorialesComponent } from './components/editoriales/editoriales.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    AutoresComponent,
    EditorialesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
