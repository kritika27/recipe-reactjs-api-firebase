import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { useGlobalContext } from "../../context";
import "./Search.css";

const Search = () => {
  const { setSearchTerm } = useGlobalContext();

  const debounced = useDebouncedCallback((search) => {
    setSearchTerm(search);
  }, 1000);

  return (
    <>
      <section>
        <form className="search-form">
          <div className="form-control">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Search Recipes.."
              defaultValue=""
              onChange={(e) => debounced(e.target.value)}
            />
          </div>
        </form>
      </section>
    </>
  );
};
export default Search;
