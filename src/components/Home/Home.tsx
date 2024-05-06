import { useEffect, useState } from "react";
import axios from "axios"

// import ItemCard from "../ItemCard/ItemCard"

const API_KEY = import.meta.env.VITE_API_KEY;

console.log(API_KEY);

const BASE_URL = 'https://api.themoviedb.org/3/movie/top_rated';

const api = `${BASE_URL}?api_key=${API_KEY}`

const Home = () => {

  // const [ searchTerm, setSearchTerm ] = useState('');
  const [ category, setCategory ] = useState('movies')

  

  const fetchData = async () => {
    const results = await axios.get(api);

    console.log(results.data.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log(category)
  }, [category])

  const categoryClickHandler = (name: string) => {
    setCategory(name);
  }
  
  return (
    <main className="container">
      <header>
        <h1>Home</h1>
      </header>
      <div className="category-bar">
        <button 
          className="btn category-btn"
          onClick={() => categoryClickHandler('movies')}
        >
          movies
        </button>
        <button
          className="btn category-btn"
          onClick={() => categoryClickHandler('tvshows')}
        >
          tv shows
        </button>
      </div>
      <div className="search-bar">
        <label htmlFor="search">Search</label>
        <input type="text" id="search" name="search" placeholder="Search..." />
      </div>
      <main className="cards-container">
        {/* <ItemCard /> */}
      </main>
    </main>
  )
}

export default Home