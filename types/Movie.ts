import {Genre} from "./Genre";
import {Cast} from "./Cast";
import {Title} from "./Title";

export class Movie {
  name: string = "";
  description: string = "";
  image: string = "";
  starts: number = 0;
  year: number = 0;
  id!: number;
}

export class MovieResult extends Movie {
  genres!: Genre[];
  casts!: Cast[];
  titles!: Title[];
}