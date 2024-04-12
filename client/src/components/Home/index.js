import {Component}  from 'react';


import Navbar from '../Navbar'
import RecipeCard from '../RecipeCard';

import "./index.css"

class Home extends Component {
  state = {recipeList: []}

  componentDidMount() {
   this.getRecipeData()
  }

  getRecipeData = async () => {
     try{const response = await fetch("/res")
     if(response.status === 200){
      const data = await response.json()
      const updatedData = data.map((each) =>( {
        id : each.id,
        title : each.title,
        description : each.description,
        imageUrl: each.image_url,
        isBookmarked: each.is_bookmarked
      }))
      this.setState({recipeList:updatedData})
      console.log(updatedData)
     }
    }catch(e){
      console.log(`Error: ${e.message}`);
    }
    }
  
    // console.log(data)
  

  render(){
    const {recipeList} = this.state
    return (
      <>
      <Navbar />
      <div className='home-container'>
        <h1 className='home-heading'>Recipes List</h1>
        <ul className='recipe-list-container'>
          {recipeList.map((each) => 
        <RecipeCard key={each.id} cardDetails = {each} />
        )}
        </ul>
      </div>
      </>
    )

  }
 
}

export default Home