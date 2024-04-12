import {Routes,Route} from "react-router-dom"

import './App.css';

import Login from "./components/Login"
import Signup from './components/Signup';
import Home from './components/Home';
import RecipeDetails from "./components/RecipeDetails";


const  App =() =>  {
 

  return (
    <>
    <Routes>
      <Route exact path='/home' element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Signup />} />
      <Route exact path="recipe-details/:id" element={<RecipeDetails />} />
    </Routes>
    </>
  )
}

export default App;
