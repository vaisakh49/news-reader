import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextList } from "../../actions/newsActions";
import DateRange from "../custom/DateRange";
import NewsCard from "./NewsCard";

const NewsList = (props) => {
  const dispatch = useDispatch();

  const newsList = useSelector((state) => state.newsList);

  const { news, loading, nexturl } = newsList;

  const newurl = nexturl ? nexturl.split("com")[1] : "";

  const nextNewsList = (url) => {
    dispatch(nextList(url));
  };

  return (
    <div className="container">
      {loading ? (
        <div>{""}</div>
      ) : (
        <div>
          <div className="container mt-5">
            <DateRange />
          </div>
          <div>
            {news.map((data, index) => (
              <NewsCard
                key={index}
                id={data.id}
                source={data.publication}
                title={data.title}
                date={data.date}
                sentiment={data.sentiment}
              />
            ))}
          </div>
          {news.length !== 0 && (
            <div className="d-flex justify-content-center">
              <button
                className="my-4 btn btn-secondary"
                onClick={() => nextNewsList(newurl)}
              >
                next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsList;
