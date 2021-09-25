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

  const submitForm = (data, e) => {
    console.log(data.filter)

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
          <div className="d-flex justify-content-start">
            <button
              className="btn btn-primary btn-sm mb-2"
              onClick={() => append({ name: "item" })}
            >
              Add filter
            </button>
          </div>

          {fields.map(({ id, type, value }, index) => {
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
                      <input
                        ref={register()}
                        name={`filter[${index}].category`}
                        defaultValue={value}
                        type="text"
                        className="form-control"
                        aria-label="search"
                        aria-describedby="Search categories"
                      />
                    ) : //--------------------------------------------------------------------------------
                    filter === "sentiment" ? (
                      <select
                        ref={register()}
                        name={`filter[${index}].sentiment`}
                        defaultValue={value}
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
                        name={`filter[${index}].source`}
                        defaultValue={value}
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
          })}

          <hr />
          <div className="d-flex justify-content-end">
            <div
              type="submit"
              value="Submit"
              className="btb btn-sm btn-primary "
            >
              Search{" "}
            </div>
          </div>
        </form>
      </Modal>
    </div>
  )
}

// AdvanceSearchModal.propTypes = {}

export default AdvanceSearchModal

// import React, { useState } from "react"
// import Modal from "react-modal"
// // import PropTypes from 'prop-types'
// import FilterCategory from "../filter/FilterCategory"
// import FilterSentiment from "../filter/FilterSentiment"
// import FilterSource from "../filter/FilterSource"

// const AdvanceSearchModal = ({ isOpen, closeModal }) => {
//   const customStyles = {
//     content: {
//       top: "40%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       width: "40%",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
//     },
//   }
//   const [filter, setFilter] = useState("")
//   const [filter2, setFilter2] = useState("")
//   const [filter3, setFilter3] = useState("")

//   const advanceSearch = () => {
//     setFilter("")
//     setFilter2("")
//     setFilter3("")
//     closeModal()
//   }

//   let currentFilterValue = "DEFAULT"

//   return (
//     <div>
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//         ariaHideApp={false}
//       >
//         <div className="d-flex justify-content-between">
//           <h6>
//             <b>Advanced Search</b>
//           </h6>
//           <div className="btb btn-sm btn-close " onClick={closeModal} />
//         </div>
//         <hr />
//         <form onSubmit={advanceSearch}>
//           <div className="d-flex flex-column justify-content-around mb-2">
//             <div className="d-flex flex-row mb-3">
//               <select
//                 id="inputGroupSelect01"
//                 onChange={(e) => setFilter(e.target.value)}
//                 defaultValue={"DEFAULT"}
//               >
//                 <option value={currentFilterValue}>Select Filter</option>
//                 <option value="category">Category</option>
//                 <option value="sentiment">Sentiment</option>
//                 <option value="source">Source</option>
//               </select>
//               <span className="ml-3">
//                 {filter === "category" ? (
//                   <FilterCategory />
//                 ) : filter === "sentiment" ? (
//                   <FilterSentiment />
//                 ) : filter === "source" ? (
//                   <FilterSource />
//                 ) : (
//                   <fieldset disabled>
//                     <input
//                       type="text"
//                       id="disabledTextInput"
//                       className="form-control"
//                       placeholder="Please Select a filter"
//                     />
//                   </fieldset>
//                 )}
//               </span>
//             </div>
//             <div className="d-flex flex-row mb-3">
//               <select
//                 id="inputGroupSelect01"
//                 onChange={(e) => setFilter2(e.target.value)}
//                 defaultValue={"DEFAULT"}
//               >
//                 <option value={currentFilterValue}>Select Filter</option>
//                 <option value="category">Category</option>
//                 <option value="sentiment">Sentiment</option>
//                 <option value="source">Source</option>
//               </select>
//               <span className="ml-3">
//                 {filter2 === "category" ? (
//                   <FilterCategory />
//                 ) : filter2 === "sentiment" ? (
//                   <FilterSentiment />
//                 ) : filter2 === "source" ? (
//                   <FilterSource />
//                 ) : (
//                   <fieldset disabled>
//                     <input
//                       type="text"
//                       id="disabledTextInput"
//                       className="form-control"
//                       placeholder="Please Select a filter"
//                     />
//                   </fieldset>
//                 )}
//               </span>
//             </div>
//             <div className="d-flex flex-row mb-3">
//               <select
//                 id="inputGroupSelect01"
//                 onChange={(e) => setFilter3(e.target.value)}
//                 defaultValue={"DEFAULT"}
//               >
//                 <option value={currentFilterValue}>Select Filter</option>
//                 <option value="category">Category</option>
//                 <option value="sentiment">Sentiment</option>
//                 <option value="source">Source</option>
//               </select>
//               <span className="ml-3">
//                 {filter3 === "category" ? (
//                   <FilterCategory />
//                 ) : filter3 === "sentiment" ? (
//                   <FilterSentiment />
//                 ) : filter3 === "source" ? (
//                   <FilterSource />
//                 ) : (
//                   <fieldset disabled>
//                     <input
//                       type="text"
//                       id="disabledTextInput"
//                       className="form-control"
//                       placeholder="Please Select a filter"
//                     />
//                   </fieldset>
//                 )}
//               </span>
//             </div>
//           </div>

//           <hr />
//           <div className="d-flex justify-content-end">
//             <button className="btb btn-sm btn-primary " type="submit">
//               Search{" "}
//             </button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   )
// }

// // AdvanceSearchModal.propTypes = {}

// export default AdvanceSearchModal
