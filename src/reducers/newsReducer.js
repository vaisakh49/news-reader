import {
  GET_NEWS_CATEGORIES_SUCCESS,
  GET_NEWS_SOURCES_SUCCESS,
  SEARCH_NEWS_REQUEST,
  SEARCH_NEWS_SUCCESS,
} from "../constance/newsConstance"

export const newsListReducer = (
  state = { news: [], sources: [], categories: [] },
  action
) => {
  switch (action.type) {
    case SEARCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
        news: [],
      }
    case SEARCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload,
      }
    case GET_NEWS_SOURCES_SUCCESS:
      return {
        ...state,
        loading: false,
        sources: action.payload.sources,
      }
    case GET_NEWS_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      }
    default:
      return state
  }
}
