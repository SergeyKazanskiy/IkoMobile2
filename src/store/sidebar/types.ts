export interface iCategory {
  id: string;
  number: number;
  title: string;
}
export interface iSection {
  id: string;
  number: number;
  title: string;
}
export interface iShelf {
  id: string;
  number: number;
  title: string;
}
export interface iBook {
  id: string;
  number: number;
  title: string;
}

export interface iCategories {
  currentId: string;
  items: iCategory[];
}
export interface iSections {
  currentId: string;
  items: iSection[];
}
export interface iShelfs {
  currentId: string;
  items: iShelf[];
}
export interface iBooks {
  currentId: string;
  items: iBook[];
}
