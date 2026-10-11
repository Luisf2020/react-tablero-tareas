# react-tablero-tareas

![stack: React 18](https://img.shields.io/badge/stack--React%2018-0d9488?style=flat-square) ![stack: Vite](https://img.shields.io/badge/stack--Vite-0d9488?style=flat-square) ![stack: Vitest](https://img.shields.io/badge/stack--Vitest-0d9488?style=flat-square)
![IA: asistido](https://img.shields.io/badge/IA--asistido-6366f1?style=flat-square)

Tablero de tareas en React: hook propio (useTasks), estado derivado y render de listas.

> **Transparencia sobre IA:** este proyecto se desarrollo con asistencia de inteligencia artificial (generacion de codigo, revision y documentacion). El codigo fue leido, ejecutado y probado manualmente antes de publicarse. No declara clientes, metricas ni resultados que no puedan verificarse.

## Problema que resuelve

Gestionar el estado de una lista de tareas sin duplicar logica entre componentes ni desincronizar el contador de pendientes.

## Solucion implementada

Hook propio (useTasks) que encapsula altas, bajas y cambios, y estado derivado con useMemo para el contador; el componente solo renderiza.

### Funcionalidades principales

- Hook personalizado reutilizable
- Estado derivado (sin duplicar datos)
- Render de listas con key estable
- Estructura lista para Vitest

## Stack

- React 18
- Vite
- Vitest

## Estructura

```
src/App.jsx        # componente principal
src/useTasks.js    # logica de estado (hook)
src/main.jsx       # montaje
src/styles.css
```

## Puesta en marcha

```bash
npm install
npm run dev
npm test
```

## Complejidad del proyecto

**Nivel: Principiante** — Un componente y un hook; sin backend ni persistencia remota.

El nivel describe la complejidad tecnica del proyecto, no el grado de dominio de quien lo escribio.

## Despliegue

Pendiente de construir y publicar.  
El codigo fuente si esta disponible en este repositorio.

## Autor

**Luis Felipe Zuniga Leon** — Desarrollador de software asistido por IA

- GitHub: <https://github.com/Luisf2020>
- Correo: developerluis2@gmail.com
- WhatsApp: +504 3237 0056

---

_Proyecto de portafolio. El desarrollo se apoyo en herramientas de IA bajo revision tecnica humana._
