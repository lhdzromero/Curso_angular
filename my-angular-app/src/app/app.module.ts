// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { PaisesComponent } from './components/paises.component';
import { CiudadesComponent } from './components/ciudades.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisesComponent,
    CiudadesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
