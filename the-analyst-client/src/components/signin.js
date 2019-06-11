import React from 'react'
import { Control, Form, actions } from 'react-redux-form'

class SignIn extends React.Component {
    handleSubmit(user) {
        console.log('signin',user)
    }

    render() {
        return(
            <Form
                model='user'
                onSubmit={(user) => this.handleSubmit(user)}
                >
                <lable htmlFor='user.username'>Username: </lable>
                <Control.text model='user.username' id='user.username'/>

                <label htmlFor='user.password'>Password: </label>
                <Control type='password' model='user.password' id='user.password'/>
                <button type='submit'>
                    Sign In 
                    </button>
                </Form>
        )
    }
}
export default SignIn