import {FETCH_COMMITS} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COMMITS:
      return [
        ...state,
        action.payload
      ]
  }
  return state;
}
