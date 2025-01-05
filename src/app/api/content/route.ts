import { contentApiResponseSchema } from "@models/content-model";
import { NextResponse, NextRequest } from "next/server";
import data from "@server/payload.json";

export async function GET(request: NextRequest) {
  try {
    const parsedData = contentApiResponseSchema.safeParse(data);

    if (!parsedData.success) {
      console.log("[Validation Error]", parsedData.error.issues);
      return NextResponse.json(
        { message: "Invalid data format" },
        { status: 400 },
      );
    }

    return NextResponse.json(parsedData, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "failed to load data from route GET" },
      { status: 500 },
    );
  }
}
