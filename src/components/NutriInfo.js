import React, {useContext} from 'react';
import { AnalysisContext } from '../contexts/AnalysisContext';


const NutriInfo = (props) => {
    window.scrollTo(0,0);
    const index = props.routeArgs.match.params.index;
    const recipes = JSON.parse(localStorage.getItem("recipes")).hits;
    const recipe = recipes[index].recipe;
    const nutrientArr = Object.values(recipe.totalDaily);
    const nutrientArrTot = Object.values(recipe.totalNutrients);
    const {history} = props.routeArgs;

    const {initFetch} = useContext(AnalysisContext);

    const analyzeIngredient = (event)=>{
        const string =event.currentTarget.children.item(0).textContent;
        initFetch(string);
        history.push("/analyze");
    }

    return ( 
        <div className="nutrients">
        <h1>{recipe.label}</h1>
        <div className="row ">
            <div className="row-2--child center-hrz--col">
                <img src={recipe.image} alt=""/>
            </div>


            <div className="row-2--child center-vert">
                
            <div>
                </div>
                <h3 className="nutrients-text u-margin-bottom u-margin-top">Total Weight: {recipe.totalWeight.toFixed(2)}g</h3>
                <div className="u-margin-bottom">
                    <h3>Cautions</h3>
                    {recipe.cautions.length !== 0 ?  
                    <ul>
                        {recipe.cautions.map((caution, index)=>(
                            <li key={index}>{caution}</li>
                        ))}
                    </ul> :  <p>None</p>
                    }
                </div>

                <div className="u-margin-bottom">
                    <h3>Diet Labels</h3>
                    {recipe.dietLabels.length !== 0 ?  
                    <ul>
                        {recipe.dietLabels.map((caution, index)=>(
                            <li key={index}>{caution}</li>
                        ))}
                    </ul> :  <p>None</p>
                    }
                </div>

                
                <div className="u-margin-bottom">
                    <h3>Health Labels</h3>
                    {recipe.healthLabels.length !== 0 ?  
                    <ul>
                        {recipe.healthLabels.map((caution, index)=>(
                            <li key={index}>{caution}</li>
                        ))}
                    </ul> :  <p>None</p>
                    }
                </div>

               

            </div>

        </div>

            <div className="u-margin-top">  
                    <div className="center-hrz--col u-margin-bottom-big">
                            <h3 className="table-indicator">Ingredient Data (hover to analyze):</h3><br/>
                            <table className="table">
                                <thead style={{backgroundColor: "#2cff2c"}}>
                                    <tr>
                                        <td className="table__header">Ingredient</td>
                                        <td className="table__header">Weight</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    {recipe.ingredients.map((ingredient, index)=>(
                                        <tr key={index}>
                                            <td className="ingredient" onClick={analyzeIngredient}>
                                                <p className="ingredient__text">{ingredient.text}</p><span className="ingredient__analyze"> Analyze ingredient</span>
                                            </td>
                                            <td>{ingredient.weight}g</td>      
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                        
                        <div className="center-hrz--col u-margin-bottom-big">
                            <h3 className="table-indicator">% daily value: </h3><br/>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td className="table__header">Nutrient</td>
                                        <td className="table__header">quantity</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        nutrientArr.map((nutrient, index)=>(
                                            <tr key={index}>
                                                <td>{nutrient.label}</td>
                                                <td>{nutrient.quantity}%</td>
                                            </tr>
                                        ))
                                    }

                                </tbody>

                            </table>
                        </div>

                        <div className="center-hrz--col u-margin-bottom-big">
                            <h3 className="table-indicator">Total nutrients: </h3><br/>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td className="table__header">Nutrient</td>
                                        <td className="table__header">quantity</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        nutrientArrTot.map((nutrient, index)=>(
                                            <tr key={index}>
                                                <td>{nutrient.label}</td>
                                                <td>{nutrient.quantity}{nutrient.unit}</td>
                                            </tr>
                                        ))
                                    }

                                </tbody>

                            </table>
                        </div>
            </div>
        </div>
     );
}
 
export default NutriInfo;