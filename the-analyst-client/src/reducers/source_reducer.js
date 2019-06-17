
export default (state = {sources: [], rating: 15, total: 0, stats: false}, action) =>{
    switch (action.type) {
        case "FETCH_SOURCES": {
            return {...state, sources: action.sources}
        }

        case "FETCH_STATS": {
            return {...state, 
                rating: action.rating,
                total: action.total,
                stats: true
            }
        }

        case "CLEAR_STATS": {
            return {...state,
                rating: 0,
                total: 0,
                stats: false
            }
        }
        
        default: return state
    }

}