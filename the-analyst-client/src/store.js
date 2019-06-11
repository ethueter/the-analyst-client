import { createStore, combineReducers } from 'redux'
import { createForms } from 'react-redux-form'
import articleReducer from './reducers/article_reducer'
import userReducer from './reducers/user_reducer'

const initialSignInState = {
    username: '',
    password: ''
}

const initialSignUpState = {
    username: '',
    first_name: '',
    last_name: '',
    password: ''
}

const rootReducer = combineReducers({
    article: articleReducer,
    user: userReducer,
    ...createForms({
        signIn: initialSignInState,
        signUp: initialSignUpState
    })

})

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)