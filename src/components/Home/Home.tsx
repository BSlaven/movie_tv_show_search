import { useEffect, useState } from "react";
import axios from "axios";

import ItemCard from "../ItemCard/ItemCard"

import styles from './Home.module.css'

const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = 'https://api.themoviedb.org/3';

const generateApiRoute = (searchTerm: string, category:string): string => {

  const isSearchRoute = `${searchTerm.length < 3 ? '' : 'search/'}`;
  
  const fetchingRoute = `${BASE_URL}/${isSearchRoute}${category}${searchTerm.length < 3 ? '/top_rated' : ''}`;

  return fetchingRoute;
}

export type ItemType = {
  title: string;
  id: number;
  poster_path: string;
}

const Home = () => {

  const [ searchTerm, setSearchTerm ] = useState<string>('');
  const [ category, setCategory ] = useState<string>('tv');
  const [ items, setItems ] = useState<ItemType[]>([]);

  const fetchData = async () => {

    const fetchingRoute = generateApiRoute(searchTerm, category);

    const results = await axios.get(fetchingRoute, {
      params: {
        api_key: API_KEY,
        query: searchTerm.length < 3 ? null : searchTerm
      }
    });
    const newItems = results.data.results
    setItems(newItems.slice(0, 10));
  }

  useEffect(() => {
    console.log(items)
  }, [items])

  useEffect(() => {
    if(searchTerm.length < 3) {
      fetchData();
      return;
    }
    
    const delayFetching = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(delayFetching);
  }, [searchTerm, category]);

  const categoryClickHandler = (name: string) => {
    setCategory(name);
  }

  const handleSearchInput = (term: string)  => {
    setSearchTerm(term);
  } 
  
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Select and Search</h1>
      </header>
      <div className={styles.categoriesBar}>
        <button 
          className={`${styles.btn} ${category === 'movie' ? styles.selected : ''}`}
          onClick={() => categoryClickHandler('movie')}
        >
          movies
        </button>
        <button
          className={`${styles.btn} ${category === 'tv' ? styles.selected : ''}`}
          onClick={() => categoryClickHandler('tv')}
        >
          tv shows
        </button>
      </div>
      <div className={styles.searchBar}>
        <label htmlFor="search">Search</label>
        <input 
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => handleSearchInput(e.target.value)}
        />
        <p className={styles.searchTerm}>{searchTerm}</p>
      </div>
      <section className={styles.cardContainer}>
        {items.length === 0 ? <h1>No items here</h1> : (
          items.map(item => (
            <ItemCard key={item.id} item={item} />
          ))
        )}
      </section>
    </main>
  )
}

export default Home