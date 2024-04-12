import {useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import Navbar from '../Navbar'

import "./index.css"

const RecipeDetails = () =>  {
    const [recipeData, setData] = useState([])

    let {id} = useParams()

    const getDetails = async () => {
        const response = await fetch(`/recipe/${id}`)
        const data = await response.json()
        // console.log(data)
        // const updatedData = data.map((each) =>( {
        //     id : each.id,
        //     title : each.title,
        //     description : each.description,
        //     imageUrl: each.image_url,
        //     isBookmarked: each.is_bookmarked
        //   }))
        setData(data)
        
    }

    useEffect(() => {
       getDetails()
    },[])

    // fetch(`/recipe/${id}`).then(
    //     (response) => response.json()
    // ).then(
    //     (data) => {
    //         setData(data)
    //         console.log(data)
    //     } 
    // )
    // console.log(recipeData)
    const {title,description,image_url,is_bookmarked} = recipeData
    const btnClass = is_bookmarked ? "active" : "deactive";
    const onClickBookmark = ( ) => {
        setData({title,description,image_url,is_bookmarked :!is_bookmarked})
    }


  return (
    <>
    <Navbar />
    <div className='details-bg'>
        <img className='details-image' src={image_url} alt={title} />
        <div className='details-desc'>
            <h1 className='details-title'>{title}</h1>
            <p className='details-para'>{description}</p>
            <button type='button' onClick={onClickBookmark} className={btnClass}>{is_bookmarked ? "Bookmarked" : "Bookmark" }</button>
        </div>
    </div>
    </>
  )

}

export default RecipeDetails