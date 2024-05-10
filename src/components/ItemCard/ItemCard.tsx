import { ItemType } from "../Home/Home"

import { Link } from "react-router-dom"

const ItemCard = ({ item }:any) => {
  return (
    <Link to={`/details/${item.id}`}  className='card'>
      <div className="card-image">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}.jpg`}
          alt="poster image"
        />
      </div>
      <p className="item-title">
        {item.title}
      </p>
    </Link>
  )
}

export default ItemCard