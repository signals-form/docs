import { readdirSync, readFileSync } from "fs"
import { dirname } from "path"
export const getDemoFiles = (path: string) => {
  const dirnamepath = dirname(path)
  const files: Record<string, string> = {}
  readdirSync(dirnamepath).forEach((file) => {
    if (file === 'index.ts') return
    files[`/${file}`] = readFileSync(`${dirnamepath}/${file}`, "utf-8")
  })
  return files
}
