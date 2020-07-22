export const recipesReducer = (state, action)=>{
    switch(action.type){
        case "SET_LIST": return (action.recipes)
        default: return state;
    }
}

export const analysisReducer = (state, action)=>{
    switch(action.type){
        case "SET_ANALYSIS": return (action.analysis)
        default: return state
    }
}