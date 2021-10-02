import React from "react";
import Select from "react-select";
import { Controller, useWatch } from "react-hook-form";
import { useSelector } from "react-redux";

function MultiSelect({ control, idx }) {
  const newsList = useSelector((state) => state.newsList);

  const { sources, categories } = newsList;

  const multiSelectOptions = {
    sources: sources,
    sentiment: [
      {
        label: "Positive",
        value: "Positive",
      },
      {
        label: "Negative",
        value: "Negative",
      },
      {
        label: "Nutral",
        value: "Nutral",
      },
    ],
    categories: categories,
  };

  const option = useWatch({
    control,
    name: `filters[${idx}].select`,
  });

  return (
    <Controller
      control={control}
      name={`filters[${idx}].multi`}
      render={({ field }) => {
        return (
          <Select
            isMulti={option?.value !== "sentiment"}
            name="colors"
            options={multiSelectOptions[option?.value]}
            {...field}
            placeholder={`Select ${option?.value || "an option"}`}
          />
        );
      }}
    />
  );
}

export default MultiSelect;
