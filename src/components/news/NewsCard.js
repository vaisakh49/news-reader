import React from "react"
// import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom"

const NewsCard = ({ id, date, title, source }) => {
  const history = useHistory()

  function pushHandler(id) {
    history.push(`${id}`)
  }
  const newDate = date ? date.split("T")[0] : ""

  return (
    <>
      <div onClick={() => pushHandler(id)}>
        <div className="card">
          <div className="row mx-1 pt-1 rounded">
            <div className="text-muted">{newDate}</div>
            <div className="py-2">
              <b>{title}</b>
            </div>
            <div className="text-muted">{source}</div>
          </div>
        </div>
      </div>
    </>
  )
}

// NewsCard.propTypes = {}

export default NewsCard
