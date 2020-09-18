import { SET_TROLLS, LIKE_TROLL, UNLIKE_TROLL, LOADING_DATA } from "../types";

const initialState = {
  trolls: [],
  troll: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_TROLLS:
      return {
        ...state,
        trolls: action.payload,
        loading: false,
      };
    case LIKE_TROLL:
    case UNLIKE_TROLL:
      let index = state.trolls.findIndex(
        troll => troll.trollId === action.payload.trollId
      );
      state.trolls[index] = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
}
