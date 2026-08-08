export const runtime = 'nodejs';

export async function GET() {
  return Response.json({
    status: 'ok',
    service: 'duora-web',
    deployment: process.env.VERCEL_ENV ?? 'local',
  });
}
