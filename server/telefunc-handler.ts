import type { dbD1 } from "../database/drizzle/db";
import { enhance, type UniversalHandler } from "@universal-middleware/core";
import { telefunc } from "telefunc";

export const telefuncHandler: UniversalHandler = enhance(
  async (request, context, runtime) => {
    const httpResponse = await telefunc({
      url: request.url.toString(),
      method: request.method,
      body: await request.text(),
      context: {
        ...(context as { db: ReturnType<typeof dbD1> }),
        ...(runtime as { runtime: "workerd"; env?: { DB: D1Database } }),
      },
    });
    const { body, statusCode, contentType } = httpResponse;
    return new Response(body, {
      status: statusCode,
      headers: {
        "content-type": contentType,
      },
    });
  },
  {
    name: "freelancers-network:telefunc-handler",
    path: `/_telefunc`,
    method: ["GET", "POST"],
    immutable: false,
  },
);
