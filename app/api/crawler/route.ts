import { spider } from "@/lib/cralwer";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const url = request.nextUrl.searchParams.get("url") ?? "";
    const response = await spider(url);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen2:7b",
        role: "user",
        content: response.contents,
      }),
    };

    await fetch("http://localhost:3000/api/post", requestOptions);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create post" },
      { status: 500 }
    );
  }
}
