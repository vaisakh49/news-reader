import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const News = ({ newsId }) => {
  const newsList = useSelector((state) => state.newsList);
  const { news } = newsList;

  const singleNews = news.filter((news) => news.id === newsId);

  const data = singleNews[0];
  const date = data ? data.date.split("T")[0] : "";

  return (
    <>
      {newsId && data ? (
        <div>
          <div className="news-container">
            <div className="mb-3">
              <h5>{data.title}</h5>
            </div>
            <div className="d-flex justify-content-between text-muted">
              <div>{data.publication}</div>
              <div>{date}</div>
            </div>
            <hr />
            <p>{data.content}</p>
            <div className="d-flex justify-content-center mt-5">
              <a href={data.url}>
                source <i className="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-center fw-bolder text-muted">
            Search and pick your news...
          </div>
        </div>
      )}
    </>
  );
};

News.propTypes = {
  newsId: PropTypes.string,
};

export default News;
