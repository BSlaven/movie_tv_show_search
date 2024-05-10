import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ItemType } from "../Home/Home";

type ItemDetailsType = ItemType & {
  overview: string;
}

const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = 'https://api.themoviedb.org/3';



const category = 'tv'

const ItemPage = () => {

  const { id } = useParams();

  const [ item, setItem ] = useState<ItemDetailsType | null>(null);

  useEffect(() => {
    console.log(id);
    const fetchItem = async () => {
      const item = await axios.get(`${BASE_URL}/${category}/${id}`, {
        params: {
          api_key: API_KEY
        }
      });
      console.log(item.data);
      setItem(item.data)
    }

    fetchItem();
  }, [])
  
  return (
    <main>
      <div className="item-image">
        <img src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}.jpg`}
          alt="poster image" />
      </div>
      <p className="item-title">{item?.title}</p>
      <div className="overview-container">
        <h5>Brief Description:</h5>
        <p className="overview">
          {item?.overview}
        </p>
      </div>
    </main>
  )
}

export default ItemPage