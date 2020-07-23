import React, {useReducer, createContext} from 'react';
import { analysisReducer } from '../reducers/Reducer';
import axios from "axios";

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
    const APP_ID = "710d740d";
    const APP_KEY = "11523d351441342fcbe929bb215c690b";


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
                console.log(analysis)
                console.log("roses")
        })
    }

    return ( 
        <AnalysisContext.Provider value={{analysis, dispatch,  initFetch}}>
            {props.children}
        </AnalysisContext.Provider>
     );
}
 
export default AnalysisContextProvider;