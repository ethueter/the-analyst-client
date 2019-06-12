
export default (state = {sources: []}, action) =>{
    switch (action.type) {
        case "FETCH_SOURCES": {
            return {...state, sources: action.sources}
        }
        
        default: return state
    }

}