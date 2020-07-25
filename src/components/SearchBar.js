import React, {useContext, useEffect} from 'react';
import { RecipeContext } from '../contexts/RecipeContext';

const SearchBar = () => {
    const APP_ID = "c0a1d977";
    const APP_KEY = "0fdae905754ba278e4ce933a690f2a8d";

    const {dispatch} = useContext(RecipeContext);

    const handleSubmit = (event)=>{
      event.preventDefault();
      const searchBoxValue = document.querySelector(".search-box").value;
      fetchData(searchBoxValue);
    }

    async function fetchData(string){
      try{
        const dataJson = await fetch(`https://api.edamam.com/search?q=${string}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
        const data = await dataJson.json();
        console.log(data);
        let dataString = JSON.stringify(data);
        localStorage.setItem("recipes", dataString)
        dispatch({
          type: "SET_LIST",
          recipes: data.hits
        })
      }catch(error){
        console.log(error);
        document.getElementById("error-text").style.display = "block";
      }
      //scroll to bottom
      // document.querySelector("#dashboard").scrollTo(?,?);
    }


    return ( 
        <div>
            <form onSubmit={handleSubmit}>
              <div className="center-hrz--col u-margin-top-big">
                <input type="text" className="search-box" placeholder="search a recipe" required/>
                <input type="submit" value="search" className="button"/>
                <p style={{color: "red", display: "none"}} id="error-text" className="normal-text">There is no such food!</p>
              </div>
            </form>
        </div>
     );
}
 
export default SearchBar;
