/**
 * Modelos de datos para el sistema de Gestión de Matrículas 2026
 * IEP N.° 20874
 */

export interface Estudiante {
  nombres: string;
  apellidos: string;
  dni: string;
  fechaNacimiento: string;
  grado: string;
  esNuevo: boolean;
}

export interface Apoderado {
  nombreCompleto: string;
  dni: string;
  telefono: string;
  correo: string;
  parentesco: string;
  direccion: string;
}

export interface DocumentoAdjunto {
  nombreArchivo: string;
  tipo: string;
  adjuntado: boolean;
}

export interface Documentos {
  partidaNacimiento: DocumentoAdjunto;
  dniEstudiante: DocumentoAdjunto;
  dniApoderado: DocumentoAdjunto;
  constanciaEstudios: DocumentoAdjunto;
  foto: DocumentoAdjunto;
  fichaMatricula: DocumentoAdjunto;
}

export type EstadoMatricula = 'EN REVISIÓN' | 'APROBADA';

export interface Matricula {
  numeroSolicitud: string;
  fecha: string;
  estudiante: Estudiante;
  apoderado: Apoderado;
  documentos: Documentos;
  estado: EstadoMatricula;
}

export function crearDocumentoVacio(): DocumentoAdjunto {
  return { nombreArchivo: '', tipo: '', adjuntado: false };
}

export function crearDocumentosVacios(): Documentos {
  return {
    partidaNacimiento: crearDocumentoVacio(),
    dniEstudiante: crearDocumentoVacio(),
    dniApoderado: crearDocumentoVacio(),
    constanciaEstudios: crearDocumentoVacio(),
    foto: crearDocumentoVacio(),
    fichaMatricula: crearDocumentoVacio(),
  };
}
