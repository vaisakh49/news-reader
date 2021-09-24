import axios from "axios"
import {
  GET_NEWS_CATEGORIES_REQUEST,
  GET_NEWS_CATEGORIES_SUCCESS,
  GET_NEWS_SOURCES_REQUEST,
  GET_NEWS_SOURCES_SUCCESS,
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

  const news = await data.result.data

  dispatch({
    type: SEARCH_NEWS_SUCCESS,
    payload: news,
  })
}

export const searchNews = (text, startdate, enddate) => async (dispatch) => {
  dispatch({ type: SEARCH_NEWS_REQUEST })

  const config = {
    headers: {
      "x-api-key": "IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE",
    },
  }

  const { data } = await axios.get(
    `/news-api/news/?q=${text}&sentiment=Positive&start_date=${startdate}&end_date=${enddate}&source_id=277%2C4171&category_id=13010000%2C04018000`,
    config
  )

  const news = await data.result.data

  dispatch({
    type: SEARCH_NEWS_SUCCESS,
    payload: news,
  })
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
