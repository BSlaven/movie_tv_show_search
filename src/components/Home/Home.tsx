import { useEffect, useState } from "react";
import axios from "axios"

// import ItemCard from "../ItemCard/ItemCard"

const API_KEY = import.meta.env.VITE_API_KEY;


const generateApiRoute = (searchTerm: string, category:string): string => {
  const BASE_URL = 'https://api.themoviedb.org/3';

  const isSearchRoute = `${searchTerm.length < 3 ? '' : 'search/'}`;
  
  const fetchingRoute = `${BASE_URL}/${isSearchRoute}${category}${searchTerm.length < 3 ? '/top_rated' : ''}`;

  return fetchingRoute;
}

const Home = () => {

  const [ searchTerm, setSearchTerm ] = useState<string>('');
  const [ category, setCategory ] = useState<string>('tv');

  const fetchData = async () => {

    const fetchingRoute = generateApiRoute(searchTerm, category);

    const results = await axios.get(fetchingRoute, {
      params: {
        api_key: API_KEY,
        query: searchTerm.length < 3 ? null : searchTerm
      }
    });

    console.log(results.data.results);
  }

  useEffect(() => {
    const delayFetching = setTimeout(() => {
      fetchData();
    }, 1000)

    return () => clearTimeout(delayFetching);
  }, [searchTerm, category]);

  const categoryClickHandler = (name: string) => {
    setCategory(name);
  }

  const handleSearchInput = (term: string)  => {
    setSearchTerm(term);
  } 
  
  return (
    <main className="container">
      <header>
        <h1>Home</h1>
      </header>
      <div className="category-bar">
        <button 
          className="btn category-btn"
          onClick={() => categoryClickHandler('movie')}
        >
          movies
        </button>
        <button
          className="btn category-btn"
          onClick={() => categoryClickHandler('tv')}
        >
          tv shows
        </button>
      </div>
      <div className="search-bar">
        <label htmlFor="search">Search</label>
        <input 
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => handleSearchInput(e.target.value)}
        />
      </div>
      <main className="cards-container">
        {/* <ItemCard /> */}
      </main>
    </main>
  )
}

export default Home