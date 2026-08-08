# Arquitectura inicial

DUORA usa un monorepo TypeScript preparado para Vercel: Next.js contiene tanto la experiencia web como las rutas de servidor y PostgreSQL con Prisma proporciona persistencia.

- Las rutas de servidor viven en `apps/web/src/app/api`; se despliegan como Vercel Functions.
- Las fotos y vídeos se guardarán en un proveedor de objetos; la base solo almacena sus metadatos.
- Solo usuarios con un `Match` activo pueden intercambiar mensajes.
- Bloqueos y reportes prevalecen sobre el descubrimiento y la mensajería.
