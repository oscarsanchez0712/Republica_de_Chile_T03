# Gestión de Matrículas 2026

Aplicación frontend institucional para el proceso de matrícula del **IEP N.° 20874**.

## Objetivo

Permitir a los apoderados registrar la matrícula de un estudiante, adjuntar (simuladamente)
los documentos requeridos, enviar la solicitud, consultar su estado y obtener el
comprobante oficial una vez aprobada — todo dentro de una **única página (SPA)** con
navegación por anclas y scroll suave.

## Tecnologías utilizadas

- **Angular** (basado en NgModules, sin componentes standalone) + **TypeScript**
- **HTML5** / **CSS3**
- **Tailwind CSS** (vía CDN, en `src/index.html`)
- **Angular Reactive Forms** (`ReactiveFormsModule`) para el formulario de 5 pasos
- **localStorage** como única fuente de persistencia (sin backend, sin base de datos, sin APIs)

## Arquitectura

```
Componentes  →  MatriculaService  →  Matricula (model)  →  localStorage
```

Los componentes **nunca** acceden directamente a `localStorage`; toda la lectura y
escritura pasa por `MatriculaService`.

## Estructura del proyecto

```
src/app/
├── core/                      (reservado, existente)
├── features/landing/          (reservado, existente)
├── shared/                    (reservado, existente)
├── pages/inicio/              (reservado, existente)
├── models/
│   └── matricula.model.ts     Interfaces: Estudiante, Apoderado, Documentos, Matricula
├── services/
│   └── matricula.service.ts   Persistencia y gestión de matrículas en localStorage
├── components/
│   ├── navbar/                Header institucional + menú móvil
│   ├── hero/                  Sección de bienvenida (#inicio)
│   ├── como-funciona/         3 tarjetas explicativas
│   ├── requisitos/            6 tarjetas de requisitos (#requisitos)
│   ├── proceso-matricula/     Formulario reactivo de 5 pasos (#proceso)
│   ├── consulta-estado/       Búsqueda por N.° de solicitud o DNI (#consulta)
│   └── comprobante/           Comprobante oficial imprimible
├── app.component.ts/html/css  Integra todas las secciones en una sola página
├── app.module.ts              Declaraciones e imports (incluye ReactiveFormsModule)
└── app-routing.module.ts      Ruta única (SPA, sin páginas adicionales)
```

## Instalación

```bash
npm install
```

## Ejecución

```bash
ng serve
```

Abrir en el navegador:

```
http://localhost:4200/
```

## Notas

- Aplicación **100% frontend**: sin backend, sin base de datos, sin APIs externas, sin login.
- Todos los datos de las matrículas se guardan en `localStorage` bajo la clave `matriculas_2026`.
- El botón **"Simular aprobación"** es solo para fines demostrativos del flujo frontend.
- El comprobante puede imprimirse con el botón **"🖨 Imprimir comprobante"** (usa `window.print()`
  y estilos `@media print` que ocultan el resto de la página).
