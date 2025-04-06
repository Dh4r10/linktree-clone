import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getAuth } from '@clerk/nextjs/server';

export const GET = async (req: NextRequest) => {
  const { userId } = getAuth(req);
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const user = await db.user.findUnique({
      where: {
        id: userId
      },
      include: {
        links: true
      }
    });

    if (!user) {
      const existingUser = await db.user.create({
        data: {
          id: userId,
          name: 'User',
          username: `user_${Date.now()}`,
          links: {
            create: []
          }
        },
        include: {
          links: true
        }
      });

      return NextResponse.json(existingUser, { status: 200 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error('[GET_USER_FIRST_LOGIN]', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
};
