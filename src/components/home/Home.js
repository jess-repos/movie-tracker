import { useState, useEffect } from "react";
import {
  AiOutlineUnorderedList,
  AiOutlineLoading3Quarters,
  AiOutlineCheck,
} from "react-icons/ai";
import { useData } from "../../context/DataProvider";
import List from "../list/List";
import Button from "../ui/Button";
import Portal from "../ui/Portal";
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
  const { movies, addMovieHandler } = useData();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [selected, setSelected] = useState(selection[0]);
  const [list, setList] = useState(movies);

  const selectorHandler = (item) => {
    setSelected(item);
  };

  useEffect(() => {
    if (selected.status === "all") return setList(movies);
    const filteredMovies = movies.filter(
      (movie) => movie.status === selected.status
    );
    setList(filteredMovies);
  }, [selected, movies]);

  // const addMovie = () => {
  //   const movie = {
  //     title: "The Hunger Games",
  //     status: 1,
  //     image:
  //       "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_.jpg",
  //   };
  //   addMovieHandler(movie);
  // };

  return (
    <div>
      <div className={classes.header}>
        <h3>{selected.name}</h3>
        <Button onClick={() => setIsAddOpen(true)}>Add</Button>
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
      {isAddOpen && (
        <Portal onClose={() => setIsAddOpen(false)}>Add mode</Portal>
      )}
    </div>
  );
};

export default Home;
