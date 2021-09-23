import React, { useEffect, useState } from "react"
// import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { letestNews, searchNews } from "../../actions/newsActions"
import { setModalValue } from "../../actions/filterActions"

const Search = (props) => {
  const dispatch = useDispatch()

  const filterList = useSelector((state) => state.filterList)

  const { startdate, enddate, showmodal } = filterList

  const [text, setText] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    dispatch(letestNews())
  }, [dispatch])

  const search = (e) => {
    e.preventDefault()
    if (text === "" || startdate === "" || enddate === "") {
      alert("please enter something")
      // dispatch(letestNews())
    } else {
      dispatch(searchNews(text, startdate, enddate))
      setText("")
    }
  }

  const showModal = () => {
    setIsOpen(true)
    dispatch(setModalValue(true))
  }

  // updating text state
  const onChange = (e) => {
    // this.setState({ [e.target.name]: e.target.value });
    setText(e.target.value)
  }

  return (
    <>
      <form className="form-inline" onSubmit={search}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search here..."
          value={text}
          onChange={onChange}
        />
      </form>
      <button className="btn btn-primary" onClick={showModal}>
        Advance Search
      </button>
    </>
  )
}

// Search.propTypes = {}

export default Search
