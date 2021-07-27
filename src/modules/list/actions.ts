import actionCreatorFactory from 'typescript-fsa';
import { IListItem } from './interface';

const actionCreator = actionCreatorFactory('@@list');

export const getList = actionCreator.async<void, Array<IListItem>, string>('GET_LIST');
