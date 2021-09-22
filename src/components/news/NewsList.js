import React from "react"
import DateRange from "../custom/DateRange"
import NewsCard from "./NewsCard"
// import PropTypes from 'prop-types'
import { data } from "../../demoData"
import { useSelector } from "react-redux"

const NewsList = (props) => {
  const newsList = useSelector((state) => state.newsList)

  const { news, loading } = newsList

  return (
    <div className="container">
      {loading ? (
        <h4>loading....</h4>
      ) : (
        <div>
          {news.map((data) => (
            <NewsCard key={data.id} title={data.title} date={data.date} />
          ))}
        </div>
      )}
    </div>
  )
}

// NewsList.propTypes = {}

export default NewsList
