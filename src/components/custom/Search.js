import React, { useEffect, useState } from "react"
// import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { searchNews } from "../../actions/newsActions"
import { setModalValue, startDate } from "../../actions/filterActions"

const Search = (props) => {
  const dispatch = useDispatch()

  const filterList = useSelector((state) => state.filterList)

  const { startdate, enddate, showmodal } = filterList

  const [text, setText] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  // useEffect(() => {
  //   dispatch(letestNews())
  // }, [dispatch])
  console.log(text)
  console.log(startdate)
  console.log(enddate)

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
    console.log(text)
    console.log(startdate)
    console.log(enddate)
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
      <a href="#advance-search-modal" className="btn blue modal-trigger">
        add
      </a>
    </>
  )
}

// Search.propTypes = {}

export default Search
