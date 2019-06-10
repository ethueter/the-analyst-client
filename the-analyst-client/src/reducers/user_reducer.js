export default (state = { username: '', token: ''}, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {...state, username: action.user.username, token: action.user.token}
        }
        case "GET_USER_ARTICLES": {
            return {...state}
        }
        default: return state;
    }
}