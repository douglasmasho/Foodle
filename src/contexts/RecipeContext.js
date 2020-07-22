import React, {createContext ,useReducer} from 'react';
import { recipesReducer } from '../reducers/Reducer';

export const RecipeContext = createContext();

const RecipeContextProvider = (props) => {
    
    const [recipes, dispatch] = useReducer(recipesReducer, []);

    return ( 
        <RecipeContext.Provider value={{recipes, dispatch}}>
            {props.children}
        </RecipeContext.Provider>
     );
}
 
export default RecipeContextProvider;
