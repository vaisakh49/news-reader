import {
  SET_START_DATE,
  SET_END_DATE,
  SET_MODAL_VALUE,
} from "../constance/filterConstance"

export const filterListReducer = (
  state = { startdate: "", enddate: "", showmodal: false },
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
    case SET_MODAL_VALUE:
      return {
        ...state,
        showmodal: action.payload,
      }
    default:
      return state
  }
}
