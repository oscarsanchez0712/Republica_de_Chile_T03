import { Component, Input } from '@angular/core';
import { Matricula } from '../../models/matricula.model';

@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.component.html',
  styleUrls: ['./comprobante.component.css'],
})
export class ComprobanteComponent {
  @Input() matricula: Matricula | null = null;

  imprimir(): void {
    window.print();
  }
}
