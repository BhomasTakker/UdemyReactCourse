import React, {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try{
      const response = await fetch('https://swapi.dev/api/films/');
      // const response = await fetch('https://react-http-6b4a6.firebaseio.com/movies.json');

      if(!response.ok){
        throw new Error('Something went wrong loading data call 999');
      }

      const data = await response.json();

      
      
      const transformedMovies = data.results.map(movieData => {
            return {
              id: movieData.episode_id,
              title: movieData.title,
              openingText: movieData.opening_crawl,
              releaseDate:movieData.release_date,
            }
          });
        setMovies(transformedMovies);
        
    } catch (error){
      setError(error.message);
    }
    setIsLoading(false);
    // fetch('https://swapi.dev/api/films/').then(response => {
    //   return response.json();
    // }).then(data => {
    //   const transformedMovies = data.results.map(movieData => {
    //     return {
    //       id: movieData.episode_id,
    //       title: movieData.title,
    //       openingText: movieData.opening_crawl,
    //       releaseDate:movieData.release_date,
    //     }
    //   });
    //   setMovies(transformedMovies);
    // })
  }, []);

  useEffect(() => {
    fetchMoviesHandler(); 
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies</p>;
  if(movies.length > 0){
    content = <MoviesList movies={movies} />;
  }
  if(error){
    content = <p>{error}</p>
  }
  if(isLoading){
    content=<p>Loading...</p>
  }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no Movies :(</p>}
        {isLoading && <p>We're loading...</p>}
        {!isLoading && error && <p>{error}</p>} */}
      </section>
    </React.Fragment>
  );
}

export default App;
