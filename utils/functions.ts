export function toSnakeCase(str: string) {
  return str.replaceAll(" ", "_").toLowerCase()
}
