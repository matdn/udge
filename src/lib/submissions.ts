import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";

export async function appendJsonl(fileRelativeToRepo: string, payload: unknown) {
  const filePath = path.join(process.cwd(), fileRelativeToRepo);
  const dirPath = path.dirname(filePath);

  try {
    await mkdir(dirPath, { recursive: true });
    await appendFile(filePath, `${JSON.stringify(payload)}\n`, "utf8");
    return { ok: true as const };
  } catch (error) {
    console.error("Failed to write submission", error);
    return { ok: false as const };
  }
}
