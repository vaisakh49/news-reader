import {
  SET_START_DATE,
  SET_END_DATE,
  SET_TEXT,
} from "../constance/filterConstance";

export const filterListReducer = (
  state = { startdate: "", enddate: "", text: "" },
  action
) => {
  switch (action.type) {
    case SET_START_DATE:
      return {
        ...state,
        startdate: action.payload,
      };
    case SET_END_DATE:
      return {
        ...state,
        enddate: action.payload,
      };
    case SET_TEXT:
      return {
        ...state,
        text: action.payload,
      };

    default:
      return state;
  }
};
