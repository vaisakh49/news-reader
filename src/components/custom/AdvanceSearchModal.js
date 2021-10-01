import React, { useState } from "react";
import Modal from "react-modal";
import Select from "react-select";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import MultiSelect from "./MultiSelect";
import { useSelector, useDispatch } from "react-redux";
import { searchNews } from "../../actions/newsActions";

const optionsKeys = [
  { value: "sources", label: "Sources" },
  { value: "categories", label: "Categories" },
  { value: "sentiment", label: "sentiment" },
];

const AdvanceSearchModal = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();
  const filterList = useSelector((state) => state.filterList);

  const { text, startdate, enddate } = filterList;

  const { control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "filters",
  });

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
        <form
          onSubmit={handleSubmit((data) => {
            let sourceValue;
            let categoryValue;
            let sentimentValue;

            if (data.filters.length) {
              data.filters.forEach((value) => {
                switch (value.select.value.toString()) {
                  case "sources":
                    sourceValue = value.multi.map((x) => {
                      return x.value;
                    });
                    break;
                  case "categories":
                    categoryValue = value.multi.map((x) => {
                      return x.value;
                    });
                    break;
                  case "sentiment":
                    sentimentValue = value.multi.value;

                    break;
                  default:
                    return;
                }
              });
            }
            dispatch(
              searchNews(text, startdate, enddate, true, {
                sentiment: sentimentValue,
                source: sourceValue,
                category: categoryValue,
              })
            );
            closeModal();
          })}
        >
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-start">
                <button
                  className="btn btn-outline-primary btn-sm mb-2"
                  onClick={(e) => {
                    e.preventDefault();
                    append({});
                  }}
                >
                  Add filter
                </button>
              </div>

              {fields.map((item, idx) => {
                return (
                  <div key={item.id}>
                    <div className="d-flex flex-row  mb-2">
                      {/* -------------------------------------------------------------------------------- */}
                      <Controller
                        control={control}
                        name={`filters[${idx}].select`}
                        render={({ field }) => {
                          const { value } = field;
                          return (
                            <Select
                              options={optionsKeys}
                              placeholder="Select Filter"
                              {...field}
                              isDisabled={value} // disable dropdown when a value is set
                            />
                          );
                        }}
                      />
                      {/* -------------------------------------------------------------------------------- */}
                      <span className="mx-auto">
                        <MultiSelect control={control} idx={idx} />
                      </span>
                      <span>
                        <button
                          type="button"
                          className="btn btn-sm btn-danger ml-1"
                          onClick={() => remove(idx)}
                        >
                          x
                        </button>
                      </span>
                    </div>
                  </div>
                );
              })}

              <hr />
              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  value="Submit"
                  className="btb btn-sm btn-primary "
                >
                  Search{" "}
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "20%",
    width: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflowX: "hidden",
    overflowY: "auto",
  },
};
export default AdvanceSearchModal;
