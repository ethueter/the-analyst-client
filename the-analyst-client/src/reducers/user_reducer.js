

export default (state = { user: {}, userArticles: [], faves:[], avg: 0}, action) => {
    switch (action.type) {
        case 'LOAD_USER_DATA': {
            return {...state,
                user: action.info.user,
                userArticles: action.info.articles,
                faves: action.info.faves,
                avg: action.info.avg
            }
        }
        default: return state;
    }
}