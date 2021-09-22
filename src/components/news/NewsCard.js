import React from "react"
// import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom"

const NewsCard = ({ key, id, date, title, source }) => {
  const history = useHistory()

  function pushHandler(id) {
    history.push(`${id}`)
  }
  const newDate = date ? date.split("T")[0] : ""

  return (
    <>
      <div onClick={() => pushHandler(id)}>
        <div className="card">
          <div className="row my-1 p-2 rounded">
            <h6 className="">{newDate}</h6>
            <p>
              <b>{title}</b>
            </p>
            <hr />
            <h6>{source}</h6>
          </div>
        </div>
      </div>
    </>
  )
}

// NewsCard.propTypes = {}

export default NewsCard
