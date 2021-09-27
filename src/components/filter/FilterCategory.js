import React, { useState } from "react"
import { useSelector } from "react-redux"

const FilterCategory = (props) => {
  const newsList = useSelector((state) => state.newsList)
  const { categories } = newsList

  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState("")

  const handleFilter = (e) => {
    const searchWord = e.target.value
    setWordEntered(searchWord)

    const newFilter = categories.filter((value) => {
      return value.category.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  return (
    <div>
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            className="form-control"
            placeholder="search for category"
            value={wordEntered}
            onChange={handleFilter}
          />
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div className="dataItem">
                <p>{value.category} </p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default FilterCategory
