import React, {useReducer, createContext} from 'react';
import { analysisReducer } from '../reducers/Reducer';

export const AnalysisContext = createContext();

const AnalysisContextProvider = (props) => {
    
    let analysisStr, analysisObj;
     if(localStorage.getItem("analysis")){
        analysisStr = localStorage.getItem("analysis");
        analysisObj = JSON.parse(analysisStr);
    }else{
        analysisObj = {}
    }


    const [analysis, dispatch] = useReducer(analysisReducer, analysisObj)
    return ( 
        <AnalysisContext.Provider value={{analysis, dispatch}}>
            {props.children}
        </AnalysisContext.Provider>
     );
}
 
export default AnalysisContextProvider;