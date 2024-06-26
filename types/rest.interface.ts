import type { Table } from "./table.interface"

export interface Rest {
  title: string
  alias: string
  phone: string
  socialMedia: string
  tables: Table[]
}