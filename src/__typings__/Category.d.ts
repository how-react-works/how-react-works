export interface CategoryType {
  id?: string,
  label: string,
  href?: string
  foldable?: boolean,
  allFolded?: boolean
  folded?: boolean
  items?: CategoryType[]
}