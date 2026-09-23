import { Component } from '@angular/core';
import { Matricula } from './models/matricula.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Gestión de Matrículas 2026';
  matriculaConsultada: Matricula | null = null;

  onMatriculaEncontrada(matricula: Matricula | null): void {
    this.matriculaConsultada = matricula;
  }
}
