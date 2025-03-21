import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, mobile, email, model } = body;

    // Validate input
    if (!name || !mobile || !model) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Insert into database
    const newEntry = await db.interest.create({
      data: { name, mobile, email, model },
    });

    return NextResponse.json(
      { message: 'Form submitted successfully', data: newEntry },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Database Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
