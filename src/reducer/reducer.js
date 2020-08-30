export const initialState = null
// function to updata the state.
export const reducer = (state,action)=>{
    if (action.type==="UPDATE_PLAN"){
        return action.payload
    }
    return state
}