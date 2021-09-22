import React from "react"
import { useSelector } from "react-redux"
// import PropTypes from 'prop-types'

const News = ({ newsId }) => {
  const newsList = useSelector((state) => state.newsList)
  const { news } = newsList

  const singleNews = news.filter((news) => news.id === newsId)

  const data = singleNews[0]

  return (
    <>
      {newsId && data && (
        <div>
          <div>
            <h5>{data.title}</h5>
            <hr />
            <p>{data.content}</p>
          </div>
        </div>
      )}
    </>
  )
}

// News.propTypes = {}

export default News
