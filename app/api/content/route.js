import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import PageContent from '@/models/PageContent';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page');
  const section = searchParams.get('section');

  try {
    await connectToDatabase();
    let query = {};
    if (page) query.page = page;
    if (section) query.section = section;

    const content = await PageContent.find(query);
    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}

export async function PATCH(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectToDatabase();
    const { page, section, content } = await req.json();

    if (!page || !section) {
      return NextResponse.json({ error: 'Page and Section are required' }, { status: 400 });
    }

    const updatedContent = await PageContent.findOneAndUpdate(
      { page, section },
      { content },
      { upsert: true, new: true }
    );

    return NextResponse.json(updatedContent);
  } catch (error) {
    console.error('Update content error:', error);
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 });
  }
}
