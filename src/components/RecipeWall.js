import React, {useContext} from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import {Link} from "react-router-dom";


const RecipeWall = () => {
    const {recipes} = useContext(RecipeContext);
    console.log(recipes);

    if(recipes.length !== 0){
        window.scrollTo(0,document.body.scrollHeight);
        return ( 
            <div className="row center-hrz" style={{justifyContent: "space-around"}}>
                {
                    recipes.map((recipe, index)=>{
                        return (
                         <div key={index} className="recipe-card row-3--child"> 
                            <div style={{borderTopLeftRadius: "15px", borderTopRightRadius: "15px", overflow: "hidden"}}>
                                <div className="recipe-card__imgdiv" style={{backgroundImage : `url(${recipe.recipe.image})`}}>
                                </div>       
                            </div>

                        <p className="u-margin-top u-margin-left">{recipe.recipe.label}</p>
                            <div className="recipe-card__bottomdiv center-hrz--col u-margin-top">
                                <a href={recipe.recipe.url} className="recipe-card__button">See full recipe</a>
                                <Link to={`/recipe/${index}`} className="recipe-card__button">See nutritional details</Link>
                            </div>
                        </div> 

                        )
                    })
                }
 
               </div>


        
         );
    }else if(recipes.length === 0){
        return null

    }
    // return null

}
 
export default RecipeWall;
