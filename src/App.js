import React from 'react';
import RecipeContextProvider from './contexts/RecipeContext';
import SearchBar from './components/SearchBar';
import RecipeWall from "./components/RecipeWall";
import { Route} from "react-router-dom";
import NutriInfo from './components/NutriInfo';
import AnalysisContextProvider from './contexts/AnalysisContext';
import Analyzer from './components/Analyzer';
import Navigation from './components/Navigation';



function App() {
  return (
    <RecipeContextProvider>
      <AnalysisContextProvider>
      <div>
            <Navigation/>
            <div style={{paddingTop: "5rem"}}>
                <Route exact path="/" render={()=>{
                      return <div className="App">
                               
                                  <h1 className="header-text green-text u-margin-top">Find a recipe</h1>
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
      </div>
      </AnalysisContextProvider>
    </RecipeContextProvider>
  );
}

export default App;
