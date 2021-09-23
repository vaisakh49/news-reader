import {
  SET_START_DATE,
  SET_END_DATE,
  SET_MODAL_VALUE,
} from "../constance/filterConstance"

export const startDate = (date) => async (dispatch) => {
  dispatch({
    type: SET_START_DATE,
    payload: date,
  })
}

export const endDate = (date) => async (dispatch) => {
  dispatch({
    type: SET_END_DATE,
    payload: date,
  })
}

export const setModalValue = (value) => async (dispatch) => {
  dispatch({
    type: SET_MODAL_VALUE,
    payload: value,
  })
}