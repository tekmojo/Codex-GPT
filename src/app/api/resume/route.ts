import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/options';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const data = await req.json();
  const resume = await prisma.resume.create({
    data: {
      title: data.title,
      content: data.content,
      user: { connect: { email: session.user.email } },
    },
  });

  return NextResponse.json(resume);
}
