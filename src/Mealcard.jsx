import React from 'react'
import { NavLink } from 'react-router-dom'


const Mealcard = ({detail}) => {
    // console.log(detail)
  return (
    <div className='recipeContainer'>
    {!detail ? "" : detail.map((curItems)=>{
        return(
          
            <div className='mealsStr'>
                <img src={curItems.strMealThumb} alt="" />
                <h3>{curItems.strMeal}</h3>
                <p><b>{curItems.strArea}</b> Dish.</p>
                <p><b>{curItems.strCategory}</b>  </p>
                <NavLink to={`/${curItems.idMeal}`}>
                <button>View More</button>
                </NavLink>
            </div>
        ) 
    })}
    </div>
  )
}

export default Mealcard
