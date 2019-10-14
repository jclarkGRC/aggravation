import { ADD_ITEM } from '../actions/constants';

// This is just an example of what a state object might be
const initialState = {
  itemsInState: [], // to start out we have no items
};

// This is just an example reducer that uses the example state
// and returns it back.  Since there are not actions being performed
// this is all it can do.
const rootReducer = (state = initialState, action) => {
  switch (action) {
    case ADD_ITEM:
      return { ...state, itemsInState: [...state.itemsInState, action.payload] };
    default:
      return state;
  }
};

// Add more reducers here....

// export the reducer to be able to be used outside.
export default rootReducer;