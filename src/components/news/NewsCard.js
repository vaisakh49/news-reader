import React from "react"
// import PropTypes from 'prop-types'

const NewsCard = ({ title, date }) => {
  const newDate = date ? date.split("T")[0] : ""
  return (
    <>
      <div className="">
        <div className="row">
          {/* <div className="col-8 col-lg-12">  */}
          <div className="">
            <h6 className="">{newDate}</h6>
            <p className="lead">{title}</p>
          </div>
        </div>
      </div>
      <hr />
    </>
    // </div>
  )
}

// NewsCard.propTypes = {}

export default NewsCard
