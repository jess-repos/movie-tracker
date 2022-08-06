import { useState, useEffect } from "react";
import { useData } from "../../context/DataProvider";
import List from "../list/List";
import classes from "./Search.module.css";

const Search = () => {
  const { movies } = useData();
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchInput.length < 1) return setList(movies);
      const filteredList = movies.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setList(filteredList);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchInput]);

  return (
    <div className={classes.search}>
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Type to search movies"
      />
      <List list={list} />
    </div>
  );
};

export default Search;
