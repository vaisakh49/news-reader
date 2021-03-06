import axios from "axios";
import {
  GET_NEWS_CATEGORIES_REQUEST,
  GET_NEWS_CATEGORIES_SUCCESS,
  GET_NEWS_SOURCES_REQUEST,
  GET_NEWS_SOURCES_SUCCESS,
  NEXT_LIST_REQUEST,
  NEXT_LIST_SUCCESS,
  SEARCH_NEWS_REQUEST,
  SEARCH_NEWS_SUCCESS,
} from "../constance/newsConstance";

export const latestNews = () => async (dispatch) => {
  dispatch({ type: SEARCH_NEWS_REQUEST });

  const config = {
    headers: {
      "x-api-key": "IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE",
    },
  };

  const { data } = await axios.get("/news-api/news/", config);

  dispatch({
    type: SEARCH_NEWS_SUCCESS,
    payload: data,
  });
};

export const searchNews =
  (text, startdate, enddate, isAdvanced = false, advancedData) =>
  async (dispatch) => {
    dispatch({ type: SEARCH_NEWS_REQUEST });

    const config = {
      headers: {
        "x-api-key": "IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE",
      },
    };

    let response = [];

    if (!isAdvanced) {
      const { data } = await axios.get(
        `/news-api/news/?q=${text}&start_date=${startdate}&end_date=${enddate}`,
        config
      );
      response = data;
    } else {
      const { sentiment, category, source } = advancedData;
      let searchURL = `/news-api/news/?q=${text}&start_date=${startdate}&end_date=${enddate}`;
      if (sentiment !== "" && sentiment !== undefined) {
        searchURL += `&sentiment=${sentiment}`;
      }
      if (category !== "" && category !== undefined) {
        searchURL += `&category=${category}`;
      }
      if (source !== "" && source !== undefined) {
        searchURL += `&source=${source}`;
      }
      const { data } = await axios.get(searchURL, config);
      response = data;
    }

    dispatch({
      type: SEARCH_NEWS_SUCCESS,
      payload: response,
    });
  };

export const nextList = (url) => async (dispatch) => {
  dispatch({ type: NEXT_LIST_REQUEST });

  const config = {
    headers: {
      "x-api-key": "IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE",
    },
  };

  const { data } = await axios.get(url, config);

  dispatch({
    type: NEXT_LIST_SUCCESS,
    payload: data,
  });
};

export const getNewsSource = () => async (dispatch) => {
  dispatch({ type: GET_NEWS_SOURCES_REQUEST });

  const config = {
    headers: {
      "x-api-key": "IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE",
    },
  };

  let {
    data: { sources },
  } = await axios.get("/news-api/sources/", config);

  if (sources.length) {
    sources.forEach((x) => {
      x["label"] = x.name;
      delete x["name"];
      x["value"] = x.id;
      delete x["id"];
    });
  }

  dispatch({
    type: GET_NEWS_SOURCES_SUCCESS,
    payload: sources,
  });
};

export const getNewsCategories = () => async (dispatch) => {
  dispatch({ type: GET_NEWS_CATEGORIES_REQUEST });

  const config = {
    headers: {
      "x-api-key": "IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE",
    },
  };

  const { data } = await axios.get("/news-api/categories/", config);

  let categories = [];
  if (data.length) {
    data.forEach((value, index) => {
      if (value?.sub_categories?.length) {
        value.sub_categories.forEach((category) => {
          categories.push({
            label: category.category,
            value: category.iptc_code,
          });
        });
      } else {
        categories.push({ label: value.category, value: value.iptc_code });
      }
    });
  }

  dispatch({
    type: GET_NEWS_CATEGORIES_SUCCESS,
    payload: categories,
  });
};
