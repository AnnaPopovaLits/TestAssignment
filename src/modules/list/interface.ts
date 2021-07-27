export interface IListState {
  data: Array<IListItem>;
  loading: boolean;
  error: string | null;
}

export interface IListItem {
  name: string;
  thumbnail: string;
  description: string;
}

export interface IListItemExpanded extends Partial<IListItem> {
  isFeed?: boolean;
  isArticle?: boolean;
}
