import { SEARCH } from '../actions/types';

export default function(state=[], action) {
  switch(action.type) {
    case SEARCH:
      return [
        ...state, // Need babel stage-1 for spread operator to work.
        ...action.data,
      ];
    default:
      return state;
  }
}
