import React from 'react';
import RecipeContextProvider from './contexts/RecipeContext';
import SearchBar from './components/SearchBar';
import RecipeWall from "./components/RecipeWall";
import { Route, Link } from "react-router-dom";
import NutriInfo from './components/NutriInfo';
import AnalysisContextProvider from './contexts/AnalysisContext';
import Analyzer from './components/Analyzer';



function App() {
  return (
    <RecipeContextProvider>
      <AnalysisContextProvider>
      <div>
        <Link to="/analyze">Analyze ingredient</Link>
          <Route exact path="/" render={()=>{
            return <div className="App">
                        <h1>foodle-recipe search app</h1>
                        <SearchBar/>
                        <RecipeWall/>
                    </div>
          }}/>

          <Route exact path={`/recipe/:index`} render={routeArgs=>{
            return <NutriInfo routeArgs={routeArgs}/>
          }}/>

          <Route exact path="/analyze" render={()=>(
            <Analyzer/>
          )}/>
      </div>
      </AnalysisContextProvider>
    </RecipeContextProvider>
  );
}

export default App;
