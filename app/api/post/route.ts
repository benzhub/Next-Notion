import { invokeLLM } from "@/lib/generate-posts";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const titleTemplate = "\n ===> *幫我根據以上內容產出一定要10字以內的新聞標題(我只要標題內容就好)(繁體中文)(前後不要有單引號或雙引號)*";
    const descriptionTemplate = "\n ===> *幫我產出根據以上內容產出20字以內的引言(我只要引言內容就好)(繁體中文)(前後不要有單引號或雙引號)";
    const postContentTemplate = "\n ===> *幫我產出根據以上內容產生新聞摘要(我只要摘要內容就好)(繁體中文)(前後不要有單引號或雙引號)*";
    const tagTemplate = "\n ===> *根據這篇文章產生1個5字以內的英文標籤(不要有空格)(繁體中文)(前後不要有單引號或雙引號)";

    const body = await request.json();
    const title = await invokeLLM({...body, content: `${body.content}${titleTemplate}`});
    const description = await invokeLLM({...body, content: `${body.content}${descriptionTemplate}`});
    const postContent = await invokeLLM({...body, content: `${body.content}${postContentTemplate}`});
    const tag = await invokeLLM({...body, content: `${body.content}${tagTemplate}`});
    
    const response = await fetch("http://localhost:3000/api/notion",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, tag, description, content: postContent }),
      redirect: "follow"
    })

    // return NextResponse.json({ title, description, content: postContent, tag });
    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create post" },
      { status: 500 }
    );
  }
}
