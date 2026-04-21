import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import SiteVisit from '@/models/SiteVisit';

export async function POST(req) {
  try {
    const { path, referrer, userAgent } = await req.json();

    // Do not track admin routes
    if (path && path.startsWith('/admin')) {
      return NextResponse.json({ success: true, message: 'Admin route ignored' });
    }

    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : (req.ip || 'unknown');

    await connectToDatabase();

    await SiteVisit.create({
      path: path || 'unknown',
      referrer: referrer || null,
      userAgent: userAgent || null,
      ip: ip,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error tracking site visit:', error);
    return NextResponse.json({ success: false, error: 'Failed to record visit' }, { status: 500 });
  }
}
