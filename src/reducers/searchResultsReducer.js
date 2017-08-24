import { SEARCH, CLEAR } from '../actions/types';

export default function(state=[], action) {
  switch(action.type) {
    case CLEAR:
      return [];
    case SEARCH:
      return [
        // Need babel stage-1 for spread operator to work.
        ...action.data,
      ];
    default:
      return state;
  }
}
