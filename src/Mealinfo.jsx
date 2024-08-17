
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './index.css';

const MealInfo = () => {
  const { mealsid } = useParams();
  const [info, setInfo] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const cutClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  useEffect(() => {
    const ApiFetch = async () => {
      try {
        const ftchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsid}`);
        const jsonData = await ftchApi.json();
        console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0]);
      } catch (error) {
        console.error("Error fetching meal data:", error);
      }
    };

    ApiFetch();
  }, [mealsid]);

  if (!info) {
    return <div><h1>Loading...</h1></div>;
  }

  return (
    <>
      <div className='recipeDefine'>
        <button
          onClick={cutClick}
          className='CutBtn'
          style={{
            position: "absolute",
            right: "20px",
            top: "10px",
            fontSize: "40px",
            width: "40px",
            backgroundColor: "rgba(63, 43, 52, 1)",
            color: "white",
            border: "none"
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <img src={info.strMealThumb} alt={info.strMeal} />
        <div>
          <h1><u>Meal Info</u></h1>
          <br />
          <h2><u>Instructions</u></h2>
          <br />
          <h2><b>{info.strArea} {info.strCategory}</b></h2>
          <p>{info.strInstructions}</p>
        </div>
      </div>
    </>
  );
};

export default MealInfo;