import { Component } from '@angular/core';

interface RequisitoInfo {
  icono: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-requisitos',
  templateUrl: './requisitos.component.html',
  styleUrls: ['./requisitos.component.css'],
})
export class RequisitosComponent {
  requisitos: RequisitoInfo[] = [
    {
      icono: '📄',
      titulo: 'Partida de nacimiento',
      descripcion: 'Documento que acredita los datos del estudiante.',
    },
    {
      icono: '🆔',
      titulo: 'DNI del estudiante',
      descripcion: 'Documento de identidad del estudiante.',
    },
    {
      icono: '🪪',
      titulo: 'DNI del apoderado',
      descripcion: 'Documento del responsable.',
    },
    {
      icono: '📚',
      titulo: 'Constancia de estudios',
      descripcion: 'Documento que acredita los estudios realizados.',
    },
    {
      icono: '📷',
      titulo: '2 fotos tamaño carné',
      descripcion: 'Fotografías recientes del estudiante.',
    },
    {
      icono: '🗂️',
      titulo: 'Ficha única de matrícula',
      descripcion: 'Ficha necesaria para completar el registro.',
    },
  ];
}
