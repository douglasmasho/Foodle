import React, {createContext ,useReducer} from 'react';
import { recipesReducer } from '../reducers/Reducer';

export const RecipeContext = createContext();

const RecipeContextProvider = (props) => {
    
    let recipeArr
    if(localStorage.getItem("recipes")){
         recipeArr = JSON.parse(localStorage.getItem("recipes")).hits
    }else{
        recipeArr = []
    }
    const [recipes, dispatch] = useReducer(recipesReducer, recipeArr);

    return ( 
        <RecipeContext.Provider value={{recipes, dispatch}}>
            {props.children}
        </RecipeContext.Provider>
     );
}
 
export default RecipeContextProvider;
