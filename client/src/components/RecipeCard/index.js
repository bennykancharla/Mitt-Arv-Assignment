import React from 'react'
import { Link } from 'react-router-dom'

import "./index.css"

const RecipeCard = (props) => {
    const {cardDetails} = props
    const {id,title,imageUrl,isBookmarked} = cardDetails
  return (
    <li className='list-item'>
      <Link to={`recipe-details/${id}`} className='link-item'>
        <img className='recipe-image' src={imageUrl} alt={title} />
        <h3 className='recipe-heading'>{title}</h3>
        </Link>
    </li>
  )
}

export default RecipeCard