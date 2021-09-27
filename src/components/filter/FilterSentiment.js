import React from "react"

const FilterSentiment = (props) => {
  let currentSentimentValue = "DEFAULT"
  return (
    <>
      <select className="btb btn-lg" defaultValue={"DEFAULT"}>
        <option value={currentSentimentValue}>Select sentiment</option>
        <option value="Positive">Positive</option>
        <option value="Negative">Negative</option>
        <option value="Neutral">Neutral</option>
      </select>
    </>
  )
}

export default FilterSentiment
