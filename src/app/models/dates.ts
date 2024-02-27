import { Start } from "./start"
import { Status } from "./status"

export interface Dates {
  start: Start
  timezone: string
  status: Status
  spanMultipleDays: boolean
}
