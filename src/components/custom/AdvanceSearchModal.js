import React, { useState } from "react"
import Modal from "react-modal"
import { useForm, useFieldArray } from "react-hook-form"

import FilterCategory from "../filter/FilterCategory"
import FilterSentiment from "../filter/FilterSentiment"
import FilterSource from "../filter/FilterSource"
// import PropTypes from 'prop-types'

const AdvanceSearchModal = ({ isOpen, closeModal }) => {
  let currentFilterValue = "DEFAULT"
  let currentSentimentValue = "DEFAULT"

  const [filter, setFilter] = useState("")

  const customStyles = {
    content: {
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "40%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  }

  const { register, control, handleSubmit, reset } = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  })

  const submitForm = (data) => {
    console.log(data)

    // reset()
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="d-flex justify-content-between">
          <h6>
            <b>Advanced Search</b>
          </h6>
          <div className="btb btn-sm btn-close " onClick={closeModal} />
        </div>
        <hr />

        {/*  form  */}
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-start">
                <button
                  className="btn btn-outline-primary btn-sm mb-2"
                  onClick={() => append({ name: "item" })}
                >
                  Add filter
                </button>
              </div>

              {fields.map(
                ({ id, type, category, sentiment, source }, index) => {
                  console.log(type)
                  return (
                    <div key={id}>
                      <div className="d-flex flex-row justify-content-around mb-2">
                        {/* -------------------------------------------------------------------------------- */}
                        <select
                          ref={register()}
                          name={`filter[${index}].type`}
                          defaultValue={type}
                          onChange={(e) => setFilter(e.target.value)}
                        >
                          <option value="">Select Filter</option>
                          <option value="category">Category</option>
                          <option value="sentiment">Sentiment</option>
                          <option value="source">Source</option>
                        </select>
                        {/* -------------------------------------------------------------------------------- */}
                        <span>
                          {filter === "category" ? (
                            <FilterCategory
                              ref={register()}
                              name={`filter[${index}].type`}
                              defaultValue={category}
                              type="text"
                              className="form-control"
                              aria-label="search"
                            />
                          ) : //--------------------------------------------------------------------------------
                          filter === "sentiment" ? (
                            <select
                              ref={register()}
                              name={`filter[${index}].type`}
                              defaultValue={sentiment}
                              className="btb btn-lg"
                            >
                              <option value="">Select sentiment</option>
                              <option value="Positive">Positive</option>
                              <option value="Negative">Negative</option>
                              <option value="Neutral">Neutral</option>
                            </select>
                          ) : //--------------------------------------------------------------------------------
                          filter === "source" ? (
                            <FilterSource
                              ref={register()}
                              name={`filter[${index}].type`}
                              defaultValue={source}
                              type="text"
                              className="form-control"
                              aria-label="search"
                            />
                          ) : (
                            //--------------------------------------------------------------------------------
                            <fieldset disabled>
                              <input
                                type="text"
                                id="disabledTextInput"
                                className="form-control"
                                placeholder="Please Select a filter"
                              />
                            </fieldset>
                          )}
                        </span>
                        <span>
                          <button
                            type="button"
                            className="btn btn-sm btn-danger"
                            onClick={() => remove(index)}
                          >
                            x
                          </button>
                        </span>
                      </div>
                    </div>
                  )
                }
              )}

              <hr />
              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  value="Submit"
                  className="btb btn-sm btn-primary "
                  disabled
                >
                  Search{" "}
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  )
}

// AdvanceSearchModal.propTypes = {}

export default AdvanceSearchModal
