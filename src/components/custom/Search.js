import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchNews, setAlert } from "../../actions/newsActions"
// import { startDate, endDate } from "../../actions/filterActions"

const Search = (props) => {
  const dispatch = useDispatch()

  const filterList = useSelector((state) => state.filterList)

  const { startdate, enddate } = filterList

  const [text, setText] = useState("")

  const search = (e) => {
    e.preventDefault()
    if (text === "" || startdate === "" || enddate === "") {
      setAlert()
      alert("Select DateRange and Enter Something")
    } else {
      dispatch(searchNews(text, startdate, enddate))
      // dispatch(startDate(""))
      // dispatch(endDate(""))
      // setText("")
    }
  }

  return (
    <>
      <form className="form-inline" onSubmit={search}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="btn btn-secondary btn-sm" type="submit">
          <i className=" fas fa-search" />
        </div>
      </form>
    </>
  )
}

export default Search
