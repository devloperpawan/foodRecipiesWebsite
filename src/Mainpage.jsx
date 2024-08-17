import React from 'react'
import { useState } from 'react'
import './App.css'
import './index.css'
import Mealcard from './Mealcard';

const Mainpage = () => {

    const [search,setSearch] = useState();
    const [data,setData] = useState();
    const [heading,setHeading] = useState('search Your favourite recipies . . .');
    const [headingStyle, setHeadingStyle] = useState({ color: 'white' });
  
    let handleInput = (event) => {
      // let value = event.target.value;
      setSearch(event.target.value);
    }
    // console.log(search)
    const searchValue = async () => {
      if(!search){
        setHeading("Please Enter value . . .")
        setHeadingStyle({ color: 'red' });
      }
      else{
        setHeading(null);
      let gets = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      let cnvjsn =await gets.json();
      setData(cnvjsn.meals)
      }
    }
  
    return (
      <>
        <div className="main">
          <nav>
              <h1>RECIPES APP</h1>
              <search>
                  <input type="text" placeholder="search for recipies..." className="searchBox" onChange={handleInput}/>
                  <button type="submit" id="seachButton" onClick={searchValue}>Search</button>
              </search>
          </nav>
          <section>
              <h3 style={headingStyle}>{heading}</h3>
              
              <div className="recipeContainer">
              <Mealcard detail = {data}/>
                  
              </div>
          </section>
  
          {/* <div className="recipeDefine">
              <button className="recipeCloseBtn"><i className="fa-solid fa-xmark"></i></button>
              <div className="recipeText">
                  
              </div>
          </div> */}
      </div> 
      </>
    )
}

export default Mainpage
