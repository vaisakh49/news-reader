import { SET_START_DATE, SET_END_DATE } from "../constance/filterConstance"

export const filterListReducer = (
  state = { startdate: "", enddate: "" },
  action
) => {
  switch (action.type) {
    case SET_START_DATE:
      return {
        ...state,
        startdate: action.payload,
      }
    case SET_END_DATE:
      return {
        ...state,
        enddate: action.payload,
      }

    default:
      return state
  }
}
