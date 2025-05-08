import MovieCard from "../Components/MovieCardComponent"
import { useState, useEffect } from "react"
import "../css/Home.css"
import { getPopularMovies, searchMovies } from "../services/Api";

function Home(){

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    /*useeffect: when i like a movie or do something/interaction/search for a movie we don't call loadPopularMovies again each time*/ 
    useEffect(() => {
        const loadPopularMovies = async () => {
          try {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
          } catch (err) {
            console.log(err);
            setError("Failed to load movies...");
          } finally {
            setLoading(false);
          }
        };
    
        loadPopularMovies();
      }, []);

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return

        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }catch {
          console.log(err)
          setError("Failed to search movies...")
        }finally{
          setLoading(false)
        }
    };


    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
             />
            <button type="submit" className="search-button">
            Search
            </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
        <div className="loading">Loading...</div>
      ) : (
            <div className="movies-grid">
            {  /*movies.map( (movie) => movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) 
                && 
               <MovieCard movie={movie} key={movie.id}></MovieCard> ) this is how we search for a movie from a list, but here we will use
               an API so we don't need it now*/
               movies.map( (movie) =>
               <MovieCard movie={movie} key={movie.id}></MovieCard> )
            }
            </div>
      )
            }
    </div>
}


export default Home