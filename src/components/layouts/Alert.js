import React, { useEffect } from "react"
import { useSelector } from "react-redux"

const Alert = () => {
  const newsList = useSelector((state) => state.newsList)
  const { alert } = newsList
  useEffect(() => {
    console.log(alert)
  }, [alert])
  return (
    <>
      {alert && (
        <div className="d-flex justify-content-center">
          <div className="alert alert-light ">
            <i className="fas fa-info-circle">
              Please fill both date range and search field
            </i>
          </div>
        </div>
      )}
    </>
  )
}

export default Alert
