import React, { useState } from "react"
import { useSelector } from "react-redux"
// import PropTypes from 'prop-types

const FilterSource = (props) => {
  const newsList = useSelector((state) => state.newsList)
  const { sources } = newsList

  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState("")

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)

    const newFilter = sources.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered("")
  }

  return (
    <div>
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            className="form-control"
            placeholder="search for source"
            value={wordEntered}
            onChange={handleFilter}
          />
        </div>
        {/* <div className="searchIcon">
          {filteredData.length === 0 ? (
           
              <i class="fas fa-search" aria-hidden="true"></i>
            
          ) : (
            <i class="fas fa-times" aria-hidden="true"></i>
          )}
        </div> */}
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div className="dataItem">
                <p>{value.name} </p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

// FilterSource.propTypes = {}

export default FilterSource
