import { ItemType } from "../Home/Home"

const ItemCard = ({ item }:any) => {
  return (
    <div className='card'>
      <div className="card-image">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}.jpg`}
          alt="poster image"
        />
      </div>
      <p className="item-title">
        {item.title}
      </p>
    </div>
  )
}

export default ItemCard