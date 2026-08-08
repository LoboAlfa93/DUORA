# DUORA

> Conecta. Vive. Comparte.

Base inicial de la plataforma de citas DUORA: una experiencia *mobile-first* centrada en conexiones a través de planes y experiencias reales.

## Arquitectura

| Área | Tecnología | Ubicación |
| --- | --- | --- |
| Web | Next.js, React y TypeScript | `apps/web` |
| API | Route Handlers de Next.js (Vercel Functions) | `apps/web/src/app/api` |
| Datos | PostgreSQL y Prisma | `packages/db` |
| Tipos compartidos | TypeScript | `packages/shared` |

## Puesta en marcha

1. Copia `.env.example` a `.env` y ajusta los secretos.
2. Instala las dependencias: `pnpm install`.
3. Inicia la base de datos: `docker compose up -d postgres`.
4. Genera el cliente: `pnpm db:generate`.
5. Crea la migración inicial: `pnpm db:migrate -- --name init`.
6. Inicia la aplicación: `pnpm dev`.

Web: `http://localhost:3000`. Comprobación API: `http://localhost:3000/api/health`.

## Despliegue en Vercel

1. Sube el proyecto a un repositorio GitHub.
2. En Vercel, importa el repositorio y selecciona el directorio raíz del repositorio.
3. Añade `DATABASE_URL` y `JWT_SECRET` en **Settings → Environment Variables** para Preview y Production.
4. Pulsa **Deploy**. Vercel detectará Next.js y desplegará la web y las rutas de API en el mismo proyecto.

Para la base de datos de producción usa un PostgreSQL accesible desde internet (por ejemplo, una integración gestionada de Vercel). Ejecuta las migraciones como parte de tu proceso de publicación antes de activar nuevas versiones.

## Próximos módulos

Autenticación, onboarding y perfiles, descubrimiento y matching, chat, experiencias, moderación y notificaciones.
