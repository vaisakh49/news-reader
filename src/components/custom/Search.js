import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { searchNews } from "../../actions/newsActions";
import { setSearchText } from "../../actions/filterActions";

const Search = (props) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const searchText = watch("search");
  useEffect(() => {
    dispatch(setSearchText(searchText));
  }, [searchText]);

  const filterList = useSelector((state) => state.filterList);

  const { startdate, enddate } = filterList;

  const search = (data) => {
    const text = data.search;
    dispatch(searchNews(text, startdate, enddate));
  };

  return (
    <>
      <form className="form-inline" onSubmit={handleSubmit(search)}>
        <input
          placeholder="Search here..."
          className="form-control mr-sm-2 fas"
          aria-invalid={errors.search ? "true" : "false"}
          name="search"
          {...register("search", { required: true })}
        />
        {errors.search && (
          <span className="ml-2 " role="alert">
            This field is required
          </span>
        )}
      </form>
    </>
  );
};

export default Search;
