import styles from './ItemCard.module.css';

import { Link } from "react-router-dom"

const ItemCard = ({ item }:any) => {
  return (
    <div className={styles.card}>
      <Link to={`/details/${item.id}/${item.category}`}>
        <div className={styles.cardImage}>
          <img 
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}.jpg`}
            alt="poster image"
          />
        </div>
        <p className={styles.cardTitle}>
          {item.title}
        </p>
      </Link>
    </div>
  )
}

export default ItemCard