import { NextResponse } from "next/server";
import fs from "fs";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folderPath = searchParams.get("folder");
  console.log({ folderPath });
  if (!folderPath) return NextResponse.json({ status: false, data: "no folder path included", folder: folderPath });
  const files = fs.readdirSync(`public/assets/images/${folderPath}`);

  return NextResponse.json({ status: true, data: files, folder: folderPath });
}
