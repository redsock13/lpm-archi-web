import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ALLOWED_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

// Mapping for projects whose assets live in a nested public folder.
// key   = slug used in the URL (only lowercase letters, digits, hyphens)
// value = actual path relative to public/projets/
const PROJECT_FOLDERS: Record<string, string> = {
  "saint-cezert-1": "Saint Cezert 1",
  "saint-cezert-2": "Saint Cezert 2",
};

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ project: string }> }
) {
  const { project } = await context.params;

  // Security: only allow lowercase letters, digits, and hyphens
  if (!/^[a-z0-9-]+$/.test(project)) {
    return NextResponse.json({ images: [] });
  }

  const folderPath  = PROJECT_FOLDERS[project] ?? project;
  const galleryDir  = path.join(process.cwd(), "public", "projets", folderPath, "gallerie");
  const publicPrefix = `/projets/${folderPath}/gallerie`;

  try {
    const files = fs.readdirSync(galleryDir);
    const images = files
      .filter((f) => ALLOWED_EXT.has(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `${publicPrefix}/${encodeURIComponent(f)}`);

    return NextResponse.json({ images });
  } catch {
    return NextResponse.json({ images: [] });
  }
}
