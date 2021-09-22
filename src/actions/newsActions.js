import axios from "axios"
import {
  SEARCH_NEWS_REQUEST,
  SEARCH_NEWS_SUCCESS,
} from "../constance/newsConstance"

export const letestNews = () => async (dispatch) => {
  dispatch({ type: SEARCH_NEWS_REQUEST })

  const config = {
    headers: {
      "x-api-key": "IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE",
    },
  }

  const { data } = await axios.get("/news-api/news/", config)

  console.log(data.result.data)
  const news = await data.result.data

  dispatch({
    type: SEARCH_NEWS_SUCCESS,
    payload: news,
  })
}

export const searchNews = () => async (dispatch) => {
  dispatch({ type: SEARCH_NEWS_REQUEST })

  const config = {
    headers: {
      "x-api-key": "IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE",
    },
  }

  const { data } = await axios.get("/news-api/news/", config)

  console.log(data.result.data)
  const news = await data.result.data

  dispatch({
    type: SEARCH_NEWS_SUCCESS,
    payload: news,
  })
}
