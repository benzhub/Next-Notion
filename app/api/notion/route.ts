import { NextRequest, NextResponse } from "next/server";
import { createBlog } from "@/lib/notion";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description } = body;
    const response = await createBlog(title, description);
    return NextResponse.json({ message: response });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create post" },
      { status: 500 }
    );
  }
}
