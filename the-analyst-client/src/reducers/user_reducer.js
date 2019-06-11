import { login } from '../services/user_actions'
import { newUser } from '../services/user_actions'

export default (state = { username: '', current_user_id: 0}, action) => {
    switch (action.type) {
        case "LOGIN": {
            console.log('user', action.data)
            let loginInfo = { username: action.data.username, password: action.data.password}
            login(loginInfo).then(user => {
                console.log('post db', user)
                localStorage.setItem('token', user.token);

                return {...state, username: action.data.username, current_user_id: user.id}})
        }
        case "SIGN_UP": {
            console.log(action.userNew)
            newUser(action.userNew)

        }
        default: return state;
    }
}