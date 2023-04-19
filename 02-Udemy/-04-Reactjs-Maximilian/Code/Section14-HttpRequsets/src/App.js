import React, { useState, useEffect, useCallback } from "react";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];
  const fetchMoviesHandler = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const respone = await fetch(
        "https://demotest-364e7-default-rtdb.firebaseio.com/movies.json"
      );
      // const respone = await fetch("https://swapi.dev/api/films");
      if (!respone.ok) {
        throw new Error("Some thing went wrong");
      }
      const data = await respone.json();
      console.log(data)
      const loadedMovies = [];
      for (const key in data){
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }
      // const convertedMovies = data.results.map((movie) => {
      //   return {
      //     id: movie.episode_id,
      //     title: movie.title,
      //     releaseDate: movie.release_date,
      //     openingText: movie.opening_crawl,
      //   };
      // });
      setMovies(loadedMovies);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // function fetchMoviesHandler() {
  //   fetch("https://swapi.dev/api/films")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const convertedMovies = data.results.map((movie) => {
  //         return {
  //           id: movie.episode_id,
  //           title: movie.title,
  //           releaseDate: movie.release_date,
  //           openingText: movie.opening_crawl,
  //         };
  //       });
  //       setMovies(convertedMovies);
  //     });
  // }
  const addMovieHandler = async (movie) => {
   const respone = await fetch("https://demotest-364e7-default-rtdb.firebaseio.com/movies.json", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await respone.json();
    console.log(data);
  };
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found No movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
