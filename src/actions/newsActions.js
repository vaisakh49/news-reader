import axios from "axios"
import {
  GET_NEWS_CATEGORIES_REQUEST,
  GET_NEWS_CATEGORIES_SUCCESS,
  GET_NEWS_SOURCES_REQUEST,
  GET_NEWS_SOURCES_SUCCESS,
  NEXT_LIST_REQUEST,
  NEXT_LIST_SUCCESS,
  SEARCH_NEWS_REQUEST,
  SEARCH_NEWS_SUCCESS,
} from "../constance/newsConstance"

export const latestNews = () => async (dispatch) => {
  dispatch({ type: SEARCH_NEWS_REQUEST })

  const config = {
    headers: {
      "x-api-key": "IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE",
    },
  }

  const { data } = await axios.get("/news-api/news/", config)

  dispatch({
    type: SEARCH_NEWS_SUCCESS,
    payload: data,
  })
  sessionStorage.setItem("news", JSON.stringify(data.result.data))
}

export const searchNews = (text, startdate, enddate) => async (dispatch) => {
  dispatch({ type: SEARCH_NEWS_REQUEST })

  const config = {
    headers: {
      "x-api-key": "IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE",
    },
  }

  const { data } = await axios.get(
    `/news-api/news/?q=${text}&start_date=${startdate}&end_date=${enddate}`,
    config
  )

  dispatch({
    type: SEARCH_NEWS_SUCCESS,
    payload: data,
  })
  sessionStorage.setItem("news", JSON.stringify(data.result.data))
}

export const nextList = (url) => async (dispatch, getState) => {
  dispatch({ type: NEXT_LIST_REQUEST })

  const config = {
    headers: {
      "x-api-key": "IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE",
    },
  }

  const { data } = await axios.get(url, config)

  dispatch({
    type: NEXT_LIST_SUCCESS,
    payload: data,
  })
  sessionStorage.setItem("news", JSON.stringify(data.result.data))
  sessionStorage.setItem("nexturl", data.result.nextUrl)
}

export const getNewsSource = () => async (dispatch) => {
  dispatch({ type: GET_NEWS_SOURCES_REQUEST })

  const config = {
    headers: {
      "x-api-key": "IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE",
    },
  }

  const { data } = await axios.get("/news-api/sources/", config)

  dispatch({
    type: GET_NEWS_SOURCES_SUCCESS,
    payload: data,
  })
}

export const getNewsCategories = () => async (dispatch) => {
  dispatch({ type: GET_NEWS_CATEGORIES_REQUEST })

  const config = {
    headers: {
      "x-api-key": "IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE",
    },
  }

  const { data } = await axios.get("/news-api/categories/", config)

  dispatch({
    type: GET_NEWS_CATEGORIES_SUCCESS,
    payload: data,
  })
}
