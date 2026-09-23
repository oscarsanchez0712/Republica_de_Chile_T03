import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ComoFuncionaComponent } from './components/como-funciona/como-funciona.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { ProcesoMatriculaComponent } from './components/proceso-matricula/proceso-matricula.component';
import { ConsultaEstadoComponent } from './components/consulta-estado/consulta-estado.component';
import { ComprobanteComponent } from './components/comprobante/comprobante.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ComoFuncionaComponent,
    RequisitosComponent,
    ProcesoMatriculaComponent,
    ConsultaEstadoComponent,
    ComprobanteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
