# SmartTalentInterview

Este proyecto es una aplicación de gestión de tareas construida con Angular 16 y Angular Material. Cuenta con funcionalidades CRUD para tareas (crear, leer, actualizar y eliminar), utilizando formularios reactivos y persistencia de datos mediante un `BehaviorSubject`. La interfaz de usuario se estiliza con Angular Material, proporcionando un diseño moderno y responsivo.

## Tabla de Contenidos
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Características](#características)
- [Justificación de Herramientas y Enfoques](#justificación-de-herramientas-y-enfoques)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Instalación

1. **Clonar el repositorio:**
   ```bash
   https://github.com/Alejasrz/smart-talent-interview.git
   ```

2. **Instalar dependencias:**
   Asegúrate de tener instalado Node.js (versión 20 o superior) y luego ejecuta:
   ```bash
   npm install
   ```

3. **Angular CLI:**
   Si aún no tienes Angular CLI instalado globalmente, instálalo con:
   ```bash
   npm install -g @angular/cli@16
   ```

## Ejecución

Para ejecutar la aplicación en modo de desarrollo, utiliza:
```bash
ng serve
```
ó
```bash
npm run start
```
Luego, abre tu navegador en `http://localhost:4200/` para visualizar la aplicación.

## Características

- **CRUD de Tareas:** Permite crear, visualizar, editar y eliminar tareas.
- **Formularios Reactivos:** Utiliza Angular Reactive Forms para un manejo robusto de formularios y validaciones en tiempo real.
- **Angular Material:** Proporciona una interfaz de usuario moderna y responsiva con componentes como tablas, diálogos, checkboxes, tooltips, inputs, botones, etc.
- **Persistencia de Datos con BehaviorSubject:** Gestiona el estado de las tareas de forma reactiva, permitiendo actualizaciones instantáneas en la interfaz, debido a que no contamos con un entorno de backend.
- **Diálogos Modales:** Implementación de modales para creación, edición y eliminación de tareas, mejorando la experiencia del usuario.

## Justificación de Herramientas y Enfoques

### Angular Material para UI y Estilos
El uso de Angular Material permite crear interfaces de usuario consistentes y atractivas de manera sencilla. Sus componentes preconstruidos (como tablas, botones, formularios y diálogos) facilitan la construcción de una aplicación responsiva y estéticamente agradable.

### Programación Reactiva con Formularios Reactivos
Los formularios reactivos en Angular permiten un mayor control sobre la validación y el manejo del estado de los formularios. Esta metodología es ideal para escenarios donde se requiere validación en tiempo real y una interacción dinámica, como la creación, edición y eliminación de tareas.

### Persistencia de Datos con BehaviorSubject
El uso de `BehaviorSubject` de RxJS permite manejar y persistir el estado de la aplicación de forma reactiva. Cada vez que se modifica el listado de tareas (por ejemplo, al agregar, actualizar o eliminar una tarea), la interfaz se actualiza de inmediato, proporcionando una experiencia de usuario dinámica y consistente.

## Estructura del Proyecto

```
smart-talent-interview/
├── src/
│   ├── app/
│   │   ├── layouts/
│   │   │   └── public-layout/   # Componente con la estructura principal
│   │   ├── modules/
│   │   │   └── tasks/   # Contiene el modulo relacionado con Tareas
│   │   │   │   ├── components/
│   │   │   │   │   ├── create-task/ # Componente de dialogo para Crear tarea
│   │   │   │   │   ├── delete-task/ # Componente de dialogo para Editar tarea
│   │   │   │   │   ├── update-task/ # Componente de dialogo para Eliminar tarea
│   │   │   │   ├── interfaces/
│   │   │   │   │   ├── tasks.interface.ts   # Archivo de interfaces de Tareas
│   │   │   │   ├── pages/
│   │   │   │   │   ├── tasks-list/ # Componente de Listado de Tareas
│   │   │   │   ├── services/
│   │   │   │   │   ├── task.service.ts  # Servicio para gestionar tareas con BehaviorSubject
│   │   │   │   ├── tasks-routing.module.ts  # Archivo de rutas
│   │   │   │   ├── tasks.module.ts # Modulo de Tareas
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── header/ # Componente del header de la aplicación
│   │   └── OTROS ARCHIVOS BASE DE ANGULAR
│   └── index.html
├── package.json
└── README.md
```

