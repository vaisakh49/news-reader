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
