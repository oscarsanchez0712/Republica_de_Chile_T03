import { Component, EventEmitter, Output } from '@angular/core';
import { MatriculaService } from '../../services/matricula.service';
import { Matricula } from '../../models/matricula.model';

type TipoBusqueda = 'solicitud' | 'dni';

@Component({
  selector: 'app-consulta-estado',
  templateUrl: './consulta-estado.component.html',
  styleUrls: ['./consulta-estado.component.css'],
})
export class ConsultaEstadoComponent {
  @Output() matriculaEncontrada = new EventEmitter<Matricula | null>();

  tipoBusqueda: TipoBusqueda = 'solicitud';
  valorBusqueda = '';
  matricula: Matricula | null = null;
  buscoAlMenosUnaVez = false;

  constructor(private matriculaService: MatriculaService) {}

  seleccionarTipo(tipo: TipoBusqueda): void {
    this.tipoBusqueda = tipo;
  }

  consultar(): void {
    this.buscoAlMenosUnaVez = true;

    if (!this.valorBusqueda.trim()) {
      this.matricula = null;
      this.matriculaEncontrada.emit(null);
      return;
    }

    const resultado =
      this.tipoBusqueda === 'solicitud'
        ? this.matriculaService.buscarPorSolicitud(this.valorBusqueda)
        : this.matriculaService.buscarPorDni(this.valorBusqueda);

    this.matricula = resultado ?? null;
    this.matriculaEncontrada.emit(this.matricula);
  }

  simularAprobacion(): void {
    if (!this.matricula) {
      return;
    }
    const actualizada = this.matriculaService.aprobarMatricula(this.matricula.numeroSolicitud);
    if (actualizada) {
      this.matricula = actualizada;
      this.matriculaEncontrada.emit(this.matricula);
    }
  }
}
