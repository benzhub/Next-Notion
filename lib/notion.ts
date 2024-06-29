import "server-only";

import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionAPI } from "notion-client";
import { cache } from "react";

export const notionApi = new NotionAPI({
  activeUser: process.env.NOTION_ACTIVE_USER,
  authToken: process.env.NOTION_TOKEN_V2,
});

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getData(rootPageId: string) {
  return await notionApi.getPage(rootPageId);
}

export const createBlog = cache(async (title: string, tag: string, url: string, description: string, content: string) => {
  const response = await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_ID!,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: title,
            },
          },
        ],
      },
      Tags: {
        multi_select: [
          {
            name: tag,
          },
        ],
      },
      Category: {
        select: {
          name: tag,
        },
      },
      Slug: {
        rich_text: [
          {
            text: {
              content: url,
            },
          },
        ],
      },
      Date: {
        date: {
          start: new Date().toISOString(),
        },  
      },
      Status: {
        status: {
          name: "Published",
        },
      },
      Description: {
        rich_text: [
          {
            text: {
              content: description,
            },
          },
        ],
      },
    },
    children: [
      {
        object: "block",
        type: "paragraph",
        paragraph: {
          rich_text: [
            {
              type: "text",
              text: {
                content: content,
                // link: { url: "https://en.wikipedia.org/wiki/Lacinato_kale" },
              },
            },
          ],
        },
      },
    ],
  });
  // const pageId = response.id;
  // console.log("pageId", pageId)
  return response;
});

export const fetchTags = cache(async () => {
  const database = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID!,
  });

  const tags =
    database.properties.Tags?.type === "multi_select"
      ? database.properties.Tags.multi_select.options
      : [];
  return tags;
});

export const fetchcategories = cache(async () => {
  const database = (await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID!,
  })) as any;
  const categories = database.properties.Category.select.options ?? [];
  return categories;
});

export const fetchBlogs = cache((cursor?: string) => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    page_size: 10,
    start_cursor: cursor ? cursor : undefined,
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
      {
        property: "Name",
        direction: "ascending",
      },
    ],
    filter: {
      property: "Status",
      status: {
        equals: "Published",
      },
    },
  });
});

export const fetchPageBySlug = cache((slug: string) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        and: [
          {
            property: "Slug",
            rich_text: {
              equals: slug,
            },
          },
          {
            property: "Status",
            status: {
              equals: "Published",
            },
          },
        ],
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const fetchPageBlocks = cache((pageId: string) => {
  return notion.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
});
