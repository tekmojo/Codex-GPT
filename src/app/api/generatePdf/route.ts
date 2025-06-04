import PDFDocument from 'pdfkit';
import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (!id) {
    return new Response('Missing id', { status: 400 });
  }
  const resume = await prisma.resume.findUnique({ where: { id: Number(id) }, include: { user: true } });
  if (!resume) {
    return new Response('Not found', { status: 404 });
  }
  const doc = new PDFDocument();
  const chunks: Buffer[] = [];
  doc.on('data', (chunk) => chunks.push(chunk));
  doc.text(`Resume: ${resume.title}`);
  doc.text(resume.content || '');
  doc.end();
  await new Promise((resolve) => doc.on('end', resolve));
  const buffer = Buffer.concat(chunks);
  return new Response(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="resume-${id}.pdf"`,
    },
  });
}
