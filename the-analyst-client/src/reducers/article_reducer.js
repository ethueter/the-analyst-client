export default (state = {headlines: [], selected: [], results: []}, action) => {
    switch (action.type) {
        case "FETCH_HEADLINES": {
            return {state}
        }
        case "SEARCH_RESULTS": {
            return {state}
        }
        case "SELECT_ARTICLE": {
            return {state}
        }
        default: return state;
    }
}