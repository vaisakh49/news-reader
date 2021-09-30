import {
  SET_START_DATE,
  SET_END_DATE,
  SET_TEXT,
} from "../constance/filterConstance";

export const startDate = (date) => (dispatch) => {
  dispatch({
    type: SET_START_DATE,
    payload: date,
  });
};

export const endDate = (date) => (dispatch) => {
  dispatch({
    type: SET_END_DATE,
    payload: date,
  });
};

export const setSearchText = (text) => (dispath) => {
  dispath({
    type: SET_TEXT,
    payload: text,
  });
};
