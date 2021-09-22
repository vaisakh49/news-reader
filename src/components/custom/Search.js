import React, { useEffect, useState } from "react"
// import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { letestNews, searchNews } from "../../actions/newsActions"

const Search = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(letestNews())
  }, [dispatch])

  const [text, setText] = useState("")

  const search = (e) => {
    e.preventDefault()
    if (text === "") {
      alert("please enter something")
    } else {
      dispatch(searchNews(text))
      setText("")
    }
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
      <button className="btn btn-outline-secondary " onClick={search}>
        Search
      </button>
    </>
  )
}

// Search.propTypes = {}

export default Search
