import { IListItem, IListItemExpanded } from "../modules/list";

export const expandListData = (list: Array<IListItem>): Array<IListItemExpanded> => {
  const array: Array<IListItemExpanded> = [...list];
  array.splice(2, 0, { isArticle: true });
  array.splice(9, 0, { isFeed: true });
  return array;
}