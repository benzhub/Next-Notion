import axios from "axios";
import * as cheerio from "cheerio";
import { parse } from "node-html-parser";

export async function spider(url: string) {
  const response = await axios.get(url);
  const html = response.data;
  const $ = cheerio.load(html);
  //   console.log(response.data)
  const title = $("title").text();

  const paragraphs: string[] = [];
  $(".content-inner .Zi_ad_ar_iR p").each((_, element) => {
    const paragraph = $(element).text();

    if (paragraph.length > 0) {
      if (paragraph.includes("<img")) {
        const imgUrl = parse(paragraph)
          .querySelector("img")
          ?.getAttribute("src");
        // if (imgUrl) paragraphs.push(imgUrl);
        return;
      }
      paragraphs.push(paragraph);
    }
  });
//   console.log("title", title);
  //   paragraphs.forEach((p) => console.log(p));
  const contents = paragraphs.reduce((acc, p) => acc + p + "\n", "");
//   console.log("contents", contents);
  return {title, contents};
}
