import React from "react"
import { useSelector } from "react-redux"
// import PropTypes from 'prop-types'

const News = ({ newsId }) => {
  const newsList = useSelector((state) => state.newsList)
  const { news } = newsList

  const singleNews = news.filter((news) => news.id === newsId)

  const data = singleNews[0]
  const date = data ? data.date.split("T")[0] : ""

  return (
    <>
      {newsId && data ? (
        <div>
          <div>
            <div className="mb-3">
              <h5>{data.title}</h5>
            </div>
            <div className="d-flex justify-content-between text-muted">
              <div>{data.publication}</div>
              <div>{date}</div>
            </div>
            <hr />
            <p>{data.content}</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-center fw-bolder text-muted">
            Please select article...
          </div>
        </div>
      )}
    </>
  )
}

// News.propTypes = {}

export default News
