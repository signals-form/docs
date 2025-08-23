import { readFileSync } from "fs"
import { resolve } from "path"
import { fileURLToPath } from "url"

export const getComponents = (components: string[], api: string[] = ['useMessages']) => {
  const result: Record<string, string> = {}
  components.forEach((component) => {
    result[`/components/${component}.tsx`] = readFileSync(resolve(fileURLToPath(import.meta.url), `../${component}.tsx`), "utf-8")
  })
  api.forEach((fn) => {
    result[`/hooks/${fn}.ts`] = readFileSync(resolve(fileURLToPath(import.meta.url), `../../hooks/${fn}.ts`), "utf-8")
  })
  return result
}
