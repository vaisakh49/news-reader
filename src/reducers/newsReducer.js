import {
  GET_NEWS_CATEGORIES_SUCCESS,
  GET_NEWS_SOURCES_SUCCESS,
  NEXT_LIST_SUCCESS,
  SEARCH_NEWS_REQUEST,
  SEARCH_NEWS_SUCCESS,
} from "../constance/newsConstance";

export const newsListReducer = (
  state = { news: [], sources: [], categories: [], nexturl: "" },
  action
) => {
  switch (action.type) {
    case SEARCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
        news: [],
      };
    case SEARCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload.result.data,
        nexturl: action.payload.result.nextUrl,
      };

    case NEXT_LIST_SUCCESS:
      return {
        loading: false,
        news: action.payload.result.data,
        nexturl: action.payload.result.nextUrl,
      };
    case GET_NEWS_SOURCES_SUCCESS:
      return {
        ...state,
        loading: false,
        sources: action.payload,
      };
    case GET_NEWS_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    default:
      return state;
  }
};
