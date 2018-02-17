import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NovapastaComponent } from './novapasta/novapasta.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    PerfilComponent,
    NovapastaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
