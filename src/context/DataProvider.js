import { createContext, useContext, useState } from "react";

const DataContext = createContext({
  movies: [],
  addMovieHandler: () => {},
  editMovieHandler: () => {},
});

export const useData = () => useContext(DataContext);

const MOVIES = [
  {
    title: "Ice Age The Adventures of Buck Wild",
    image:
      "https://www.murphysmultiverse.com/wp-content/uploads/2022/01/ice-age-buck-1-1024x576-1.jpg",
    status: 0,
  },
  {
    title: "Twilight",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_.jpg",
    status: 1,
  },
  {
    title: "Mama",
    image:
      "https://cdn.vox-cdn.com/thumbor/TKeDQMvXdgGCCadnGr-__kDsea8=/0x0:1777x999/1200x800/filters:focal(747x358:1031x642)/cdn.vox-cdn.com/uploads/chorus_image/image/65191941/Mama1.0.jpg",
    status: 1,
  },
  {
    title: "365 Days",
    image:
      "https://static.miraheze.org/awfulmovieswiki/thumb/e/e6/365days.jpg/330px-365days.jpg",
    status: -1,
  },
  {
    title: "Green Inferno",
    image:
      "https://pyxis.nymag.com/v1/imgs/67c/e87/8012af12fd34ccf523483cfe84a4262145-25-green-inferno.2x.h473.w710.jpg",
    status: -1,
  },
  {
    title: "The Wolf of Wall Street",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg",
    status: 1,
  },
  {
    title: "Ocean's 8",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAyNDEyMzc4Ml5BMl5BanBnXkFtZTgwMjEzNjM0NTM@._V1_.jpg",
    status: 0,
  },
];

const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState(MOVIES);

  const addMovieHandler = (item) => {
    setMovies((prev) => [...prev, item]);
  };
  const editMovieHandler = (item) => {};

  return (
    <DataContext.Provider value={{ movies, addMovieHandler, editMovieHandler }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
