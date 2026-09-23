import { Injectable } from '@angular/core';
import { Matricula } from '../models/matricula.model';

const CLAVE_STORAGE = 'matriculas_2026';
const CLAVE_CONTADOR = 'matriculas_2026_contador';

@Injectable({
  providedIn: 'root',
})
export class MatriculaService {
  /**
   * Genera un número de solicitud único con formato MAT-2026-000125
   */
  generarNumeroSolicitud(): string {
    const contadorActual = this.obtenerContador();
    const siguiente = contadorActual + 1;
    this.guardarContador(siguiente);
    const numero = siguiente.toString().padStart(6, '0');
    return `MAT-2026-${numero}`;
  }

  private obtenerContador(): number {
    if (typeof localStorage === 'undefined') {
      return 0;
    }
    const valor = localStorage.getItem(CLAVE_CONTADOR);
    return valor ? parseInt(valor, 10) : 0;
  }

  private guardarContador(valor: number): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(CLAVE_CONTADOR, valor.toString());
  }

  /**
   * Guarda una nueva matrícula en localStorage
   */
  guardarMatricula(matricula: Matricula): void {
    const matriculas = this.obtenerMatriculas();
    matriculas.push(matricula);
    this.persistir(matriculas);
  }

  /**
   * Obtiene todas las matrículas almacenadas
   */
  obtenerMatriculas(): Matricula[] {
    if (typeof localStorage === 'undefined') {
      return [];
    }
    const datos = localStorage.getItem(CLAVE_STORAGE);
    if (!datos) {
      return [];
    }
    try {
      return JSON.parse(datos) as Matricula[];
    } catch {
      return [];
    }
  }

  /**
   * Busca una matrícula por su número de solicitud
   */
  buscarPorSolicitud(numeroSolicitud: string): Matricula | undefined {
    const valor = numeroSolicitud.trim().toUpperCase();
    return this.obtenerMatriculas().find(
      (m) => m.numeroSolicitud.toUpperCase() === valor
    );
  }

  /**
   * Busca la matrícula más reciente asociada a un DNI de estudiante
   */
  buscarPorDni(dni: string): Matricula | undefined {
    const valor = dni.trim();
    const encontradas = this.obtenerMatriculas().filter(
      (m) => m.estudiante.dni === valor
    );
    return encontradas.length > 0 ? encontradas[encontradas.length - 1] : undefined;
  }

  /**
   * Devuelve una matrícula específica (alias de búsqueda por solicitud)
   */
  obtenerMatricula(numeroSolicitud: string): Matricula | undefined {
    return this.buscarPorSolicitud(numeroSolicitud);
  }

  /**
   * Cambia el estado de una matrícula de "EN REVISIÓN" a "APROBADA"
   */
  aprobarMatricula(numeroSolicitud: string): Matricula | undefined {
    const matriculas = this.obtenerMatriculas();
    const indice = matriculas.findIndex(
      (m) => m.numeroSolicitud === numeroSolicitud
    );
    if (indice === -1) {
      return undefined;
    }
    matriculas[indice].estado = 'APROBADA';
    this.persistir(matriculas);
    return matriculas[indice];
  }

  /**
   * Actualiza los datos de una matrícula existente
   */
  actualizarMatricula(matricula: Matricula): void {
    const matriculas = this.obtenerMatriculas();
    const indice = matriculas.findIndex(
      (m) => m.numeroSolicitud === matricula.numeroSolicitud
    );
    if (indice !== -1) {
      matriculas[indice] = matricula;
      this.persistir(matriculas);
    }
  }

  private persistir(matriculas: Matricula[]): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(CLAVE_STORAGE, JSON.stringify(matriculas));
  }
}
