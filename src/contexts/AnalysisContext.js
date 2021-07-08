import React, {useReducer, createContext} from 'react';
import { analysisReducer } from '../reducers/Reducer';
import axios from "axios";
require("dotenv").config();

export const AnalysisContext = createContext();

const AnalysisContextProvider = (props) => {
    
    let analysisStr, analysisObj;
     if(localStorage.getItem("analysis")){
        analysisStr = localStorage.getItem("analysis");
        analysisObj = JSON.parse(analysisStr);
    }else{
        analysisObj = {}
    }
    const [analysis, dispatch] = useReducer(analysisReducer, analysisObj);
    //we can access environmental variables using process.env 
    const APP_ID = process.env.REACT_APP_ANALYZE_ID;
    const APP_KEY = process.env.REACT_APP_ANALYZE_KEY;



    const initFetch = string =>{
        //url encode the string from the user
        const arr = string.split(" ");
        const searchQ = arr.join("%20");
        fetchData(searchQ);
    }

    const fetchData = searchQ => {
            axios.get(`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${searchQ}`).then(resp => {
                dispatch({
                    type: "SET_ANALYSIS",
                    analysis: resp.data
                })
                localStorage.setItem("analysis", JSON.stringify(resp.data));
                console.log(analysis);
        })
        .catch((error)=>{
            console.log(error);     
        })
    }

    return ( 
        <AnalysisContext.Provider value={{analysis, dispatch,  initFetch}}>
            {props.children}
        </AnalysisContext.Provider>
     );
}
 
export default AnalysisContextProvider;