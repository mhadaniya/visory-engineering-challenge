import { Genre } from "./genre"
import { Segment } from "./segment"
import { Type } from "./type"

export interface Classification {
  primary: boolean
  segment: Segment
  genre: Genre
  // subGenre: SubGenre
  type: Type
  // subType: SubType
  family: boolean
}
