import { Activity } from "../@types/Activity";

export type State = {
  activities: Activity[];
  loading: boolean;
};

export type Action =
  | { type: "SET_ACTIVITIES"; payload: Activity[] }
  | { type: "SET_LOADING"; payload: boolean };

export const initialState: State = {
  activities: [],
  loading: false,
};

export function activityReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_ACTIVITIES":
      return { ...state, activities: action.payload };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    default:
      return state;
  }
}
