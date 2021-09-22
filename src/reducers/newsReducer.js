import {
  SEARCH_NEWS_REQUEST,
  SEARCH_NEWS_SUCCESS,
} from "../constance/newsConstance"

export const newsListReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case SEARCH_NEWS_REQUEST:
      return {
        loading: true,
        news: [],
      }
    case SEARCH_NEWS_SUCCESS:
      return {
        loading: false,
        news: action.payload,
      }
    default:
      return state
  }
}
