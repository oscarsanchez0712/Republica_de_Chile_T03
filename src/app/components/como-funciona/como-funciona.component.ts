import { Component } from '@angular/core';

interface PasoInfo {
  numero: string;
  icono: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-como-funciona',
  templateUrl: './como-funciona.component.html',
  styleUrls: ['./como-funciona.component.css'],
})
export class ComoFuncionaComponent {
  pasos: PasoInfo[] = [
    {
      numero: '01',
      icono: '📋',
      titulo: 'Requisitos',
      descripcion: 'Revisa los documentos necesarios.',
    },
    {
      numero: '02',
      icono: '📝',
      titulo: 'Registro',
      descripcion: 'Completa los datos del estudiante y apoderado.',
    },
    {
      numero: '03',
      icono: '📤',
      titulo: 'Envío',
      descripcion: 'Envía tu solicitud y realiza el seguimiento.',
    },
  ];
}
