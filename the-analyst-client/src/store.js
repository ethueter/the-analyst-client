import { createStore, combineReducers } from 'redux'
import articleReducer from './reducers/article_reducer'
import userReducer from './reducers/user_reducer'



const rootReducer = combineReducers({
    article: articleReducer,
    user: userReducer

})

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)