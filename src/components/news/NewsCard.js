import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const NewsCard = ({ id, date, title, source, sentiment }) => {
  const newsList = useSelector((state) => state.newsList);
  const { news } = newsList;

  useEffect(() => {
    history.push(news[0].id);
  }, []);

  const history = useHistory();

  function pushHandler(id) {
    history.push(`/${id}`);
  }
  const newDate = date ? date.split("T")[0] : "";

  return (
    <>
      <div onClick={() => pushHandler(id)}>
        <div className="card">
          <div className="row mx-1 pt-1 rounded">
            <div className="text-muted">{newDate}</div>
            <div className="py-2">
              <b>{title}</b>
            </div>

            <div className="text-muted">
              {sentiment === "Positive" && (
                <button
                  type="button"
                  className="btn btn-success btn-circle btn-sm"
                />
              )}
              {sentiment === "Negative" && (
                <button
                  type="button"
                  className="btn btn-danger btn-circle btn-sm"
                />
              )}
              {sentiment === "Neutral" && (
                <button
                  type="button"
                  className="btn btn-secondary btn-circle btn-sm"
                />
              )}
              <span className="mx-2">{source} </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NewsCard.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  sentiment: PropTypes.string.isRequired,
};

export default NewsCard;
