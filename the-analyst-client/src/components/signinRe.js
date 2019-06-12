import React from 'react'
import { login } from '../services/user_actions'
import { withRouter } from 'react-router-dom'
import { Form, Input, Button } from 'semantic-ui-react'


class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        login(this.state).then(session => {
            localStorage.setItem('token', session.token)
            localStorage.setItem('current_user_id', session.current_user_id.toString())    
            console.log(session)
        })
        this.props.history.push('/')
    }

    render() {

        return (
                
            <Form className='sign-in' onSubmit={(e)=>this.handleSubmit(e)}>
                <Form.Field
                    id='form-input-control-su-username'
                    control={Input}
                    label='Username:'
                    name='username'
                    onChange={(e) => this.handleChange(e)}
                />
                
                <Form.Field
                    id='form-input-control-su-password'
                    control={Input}
                    type='password'
                    label='Password'
                    name='password'
                    onChange={(e) => this.handleChange(e)}
                />
                <Button type='submit'>Sign In</Button>
            </Form>
                    
            
        )
    }

}



export default withRouter(SignIn)