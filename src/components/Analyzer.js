import React, {useContext} from 'react';
import {AnalysisContext} from "../contexts/AnalysisContext"
import TDChart from './TDChart';

const Analyzer = () => {
    
    const {initFetch} = useContext(AnalysisContext);


    const handleSubmit = (event)=>{
        event.preventDefault();
        const string = document.getElementById("analyze-box").value;
        //url encode the string from the user
        // const arr = string.split(" ");
        // const searchQ = arr.join("%20");
        initFetch(string);
        
    }

    return ( 
        
        <div>
            <form onSubmit={handleSubmit}>
            <h1 className="header-text green-text u-margin-top">Analyze</h1>
                <div className="center-hrz--col u-margin-top u-margin-bottom-big">
                    <input type="text" className="search-box" id="analyze-box" placeholder="analyze an ingredient"/>
                    <p className="normal-text white-text">Make sure to include a quantity (kg/tbsp/number)</p>
                    <input type="submit" className="button" value="analyze"/>
                </div>
            </form>
            <TDChart/>
        </div>
     );
}
 
export default Analyzer;