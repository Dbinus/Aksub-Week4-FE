import { useState } from 'react'

function StarIcon({ filled }){
  return (
    <svg
      className={`star ${filled ? 'filled' : ''}`}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
    </svg>
  )
}

function StarRating({ rating }){
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon key={n} filled={n <= Math.round(rating)} />
      ))}
    </div>
  )
}

export default function ProductCard({ product }){
  const [saved, setSaved] = useState(false);
  const { title, category, image, price, rating } = product;
  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img src={image} alt={title} loading="lazy" />
        <button className="bookmark-btn">
          <img src="../assets/bookmark.svg" alt="" style={{scale: "0.5"}}/>
        </button>
      </div>
      <div className="product-info">
        <p className="product-category">{category}</p>
        <h3 className="product-name">{title}</h3>
        <div className="product-rating">
          <StarRating rating={rating?.rate ?? 0} />
          <span className="rating-count">({rating?.count ?? 0})</span>
        </div>
        <p className="product-price">
          ${Number(price).toFixed(2)}
        </p>
      </div>
    </div>
  )
}
