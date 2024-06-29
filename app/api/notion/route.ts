import { NextRequest, NextResponse } from "next/server";
import { createBlog } from "@/lib/notion";
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, tag, description, content } = body;
    const response = await createBlog(title, tag, `${tag}-${uuidv4()}`, description, content);
    return NextResponse.json({ message: response });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create post" },
      { status: 500 }
    );
  }
}
