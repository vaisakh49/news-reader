import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { searchNews } from "../../actions/newsActions"

const Search = (props) => {
  const dispatch = useDispatch()

  const filterList = useSelector((state) => state.filterList)

  const { startdate, enddate } = filterList

  const search = (data) => {
    const text = data.search

    dispatch(searchNews(text, startdate, enddate))
    console.log("searchNews running")
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  return (
    <>
      <form className="form-inline" onSubmit={handleSubmit(search)}>
        <input
          placeholder="Search here..."
          className="form-control mr-sm-2 fas"
          aria-invalid={errors.search ? "true" : "false"}
          name="search"
          ref={register({ required: true })}
        />
        {errors.search && (
          <span className="ml-2 " role="alert">
            This field is required
          </span>
        )}
      </form>
    </>
  )
}

export default Search
