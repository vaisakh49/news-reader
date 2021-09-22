import React from "react"
// import PropTypes from 'prop-types'
import { singleData } from "../../demoData"

const News = (props) => {
  return (
    // <div className="container-lg mt-5">
    <div>
      <div>
        <h5>{singleData.title}</h5>
        <hr />
        <p>{singleData.content}</p>
      </div>
    </div>
  )
}

// News.propTypes = {}

export default News
