import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import './index.css';

const API_KEY = '80a17b3c';

function App() {
  const [query, setQuery] = useState('batman');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/`, {
          params: {
            apikey: API_KEY,
            s: query
          }
        });

        const data = response.data;

        if (data.Response === 'True') {
          setMovies(data.Search);
          setError('');
        } else {
          setMovies([]);
          setError(data.Error);
        }

      } catch (err) {
        console.error('API Error:', err);
        setError('Something went wrong.');
      }
    };

    if (query) fetchMovies();
  }, [query]);

  return (
    <div className="app">
      <h1>🎬 Movie Search</h1>
      <SearchBar onSearch={setQuery} />
      {error ? <p>{error}</p> : <MovieList movies={movies} />}
      <Footer/>
    </div>
  );
}

export default App;
