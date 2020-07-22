import React, {useContext} from 'react';
import {AnalysisContext} from "../contexts/AnalysisContext"
import axios from "axios";
import TDChart from './TDChart';

const Analyzer = () => {
    const {analysis, dispatch} = useContext(AnalysisContext);
    const APP_ID = "710d740d";
    const APP_KEY = "11523d351441342fcbe929bb215c690b";

    const handleSubmit = (event)=>{
        event.preventDefault();
        const string = document.getElementById("analyze-box").value;
        //url encode the string from the user
        const arr = string.split(" ");
        const searchQ = arr.join("%20");
        fetchData(searchQ);
    }
    //the fetching function
    const fetchData = searchQ => {
        axios.get(`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${searchQ}`).then(resp => {
            dispatch({
                type: "SET_ANALYSIS",
                analysis: resp.data
            })
            localStorage.setItem("analysis", JSON.stringify(resp.data));
            console.log(analysis)
    })
    }


    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="analyze-box"/><p>Make sure to include a quantity</p>
                <input type="submit"  value="analyze"/>
            </form>
            <TDChart/>
        </div>
     );
}
 
export default Analyzer;