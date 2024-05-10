import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from './ItemPage.module.css'

import { ItemType } from "../Home/Home";

type ItemDetailsType = ItemType & {
  overview: string;
}

const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = 'https://api.themoviedb.org/3';

const ItemPage = () => {

  const { id, category } = useParams();

  const [ item, setItem ] = useState<ItemDetailsType | null>(null);
  useEffect(() => {
    const fetchItem = async () => {
      const resultItem = await axios.get(`${BASE_URL}/${category}/${id}`, {
        params: {
          api_key: API_KEY
        }
      });

      const newItem = {
        title: resultItem.data.name || resultItem.data.original_name || resultItem.data.original_title,
        id: resultItem.data.id,
        poster_path: resultItem.data.poster_path,
        overview: resultItem.data.overview
      }
      setItem(newItem);
    }

    fetchItem();
  }, []);
  
  return (
    <main className={styles.detailsPage}>
      <div className={styles.detailsImage}>
        <img src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}.jpg`}
          alt="poster image" />
      </div>
      <div className={styles.itemDetails}>
      <p className={styles.detailsTitle}>{item?.title}</p>
      <div className={styles.overveiwContainer}>
        <p className={styles.overveiw}>
          {item?.overview}
        </p>
      </div>
      </div>
    </main>
  )
}

export default ItemPage