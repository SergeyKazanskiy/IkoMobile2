export interface iBookcase {
  title: string;
  number: number;
  bookshelves: iBookshelf[];
}
export interface iBooksection {
  title: string;
  number: number;
  bookshelves: iBookshelf[];
}
export interface iBookshelf {
  title: string;
  number: number;
}
export interface iBook {
  title: string;
  number: number;
  date: string;
}
