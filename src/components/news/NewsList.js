import React from "react"
import { useSelector } from "react-redux"
import DateRange from "../custom/DateRange"
import NewsCard from "./NewsCard"
// import PropTypes from 'prop-types'

const NewsList = (props) => {
  const newsList = useSelector((state) => state.newsList)

  const { news, loading } = newsList

  return (
    <div className="container">
      {loading ? (
        <div />
      ) : (
        <div>
          <div className="container mt-5">
            <DateRange />
          </div>
          <div>
            {news.map((data) => (
              <NewsCard
                key={data.id}
                id={data.id}
                source={data.publication}
                title={data.title}
                date={data.date}
                sentiment={data.sentiment}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// NewsList.propTypes = {}

export default NewsList
