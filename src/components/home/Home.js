import { useState, useEffect } from "react";
import {
  AiOutlineUnorderedList,
  AiOutlineLoading3Quarters,
  AiOutlineCheck,
} from "react-icons/ai";
import { useData } from "../../context/DataProvider";
import List from "../list/List";
import Button from "../ui/Button";
import classes from "./Home.module.css";

const selection = [
  {
    status: "all",
    name: "All",
    icon: "All",
  },
  {
    status: -1,
    name: "To Watch",
    icon: <AiOutlineUnorderedList />,
  },
  {
    status: 0,
    name: "Watching",
    icon: <AiOutlineLoading3Quarters />,
  },
  {
    status: 1,
    name: "Watched",
    icon: <AiOutlineCheck />,
  },
];

const Home = () => {
  const { movies } = useData();
  const [selected, setSelected] = useState(selection[0]);
  const [list, setList] = useState(movies);

  const selectorHandler = (item) => {
    setSelected(item);
    if (item.status === "all") return setList(movies);
    const filteredMovies = movies.filter(
      (movie) => movie.status === item.status
    );
    setList(filteredMovies);
  };

  return (
    <div>
      <div className={classes.header}>
        <h3>{selected.name}</h3>
        <Button>Add</Button>
      </div>
      <ul className={classes.selector}>
        {selection.map((item) => (
          <li
            title={item.name}
            onClick={() => selectorHandler(item)}
            className={item.status === selected.status ? classes.selected : ""}
            key={item.status}
          >
            {item.icon}
          </li>
        ))}
      </ul>
      <List list={list} />
    </div>
  );
};

export default Home;
