import { Accessibility } from "./accessibility"
import { AgeRestrictions } from "./age_restrictions"
import { Classification } from "./classification"
import { Dates } from "./dates"
import { Image } from "./image"
import { PriceRange } from "./price_range"
import { Promoter } from "./promoter"
import { TicketLimit } from "./ticket_limit"

export interface Event {
  name: string
  type: string
  id: string
  test: boolean
  url: string
  locale: string
  images: Image[]
  // sales: Sales
  dates: Dates
  classifications: Classification[]
  promoter: Promoter
  promoters: Promoter[]
  pleaseNote: string
  priceRanges: PriceRange[]
  // seatmap: Seatmap
  accessibility: Accessibility
  ticketLimit: TicketLimit
  ageRestrictions: AgeRestrictions
  // ticketing: Ticketing
  // _links: Links
  // _embedded: Embedded
}
