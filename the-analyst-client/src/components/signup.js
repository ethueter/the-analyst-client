import React from 'react'
import { withRouter } from 'react-router-dom'
import { newUser, login } from '../services/user_actions'
import { Button, Form, Input } from 'semantic-ui-react'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            first_name: '',
            last_name: '',
            password: ''
        }
    }

    handleChange=(e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit=(e) => {
        e.preventDefault()
        newUser(this.state).then(info => {
            let newSess = {username: info.username, password: this.state.password}
            login(newSess).then(session => {
                localStorage.setItem('token', session.token)
                localStorage.setItem('current_user_id', session.current_user_id)
                console.log(session)
            })
            this.props.history.push('/')
        })
    }

    render() {
        return( 
           
            <Form className='sign-up' >
                <Form.Field
                    id='form-input-control-su-username'
                    control={Input}
                    label='Username'
                    name='username'
                    onChange={(e) => this.handleChange(e)}
                />
                <Form.Field
                    id='form-input-control-su-first_name'
                    control={Input}
                    label='First Name'
                    name='first_name'
                    onChange={(e) => this.handleChange(e)}
                />
                <Form.Field
                    id='form-input-control-su-last_name'
                    control={Input}
                    label='Last Name'
                    name='last_name'
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

                <Button onClick={(e) => this.handleSubmit(e)}>Submit</Button>
            </Form>
        )
                
    }
}

export default withRouter(SignUp)