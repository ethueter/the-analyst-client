import React from 'react'
import { connect } from 'react-redux'
import { login } from '../services/user_actions'
import { Card, Form, Input, Button } from 'semantic-ui-react'


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    render() {
    return(
        <Card centered='true'>
            <Card.Content header='Login' />
            <Card.Content>
                <Form className='sign-in' >
                    <Form.Field
                        id='form-input-control-su-username'
                        control={Input}
                        label='Username'
                        name='username'
                        onChange={(e)=> this.handleChange(e)}
                        />
                    <Form.Field
                        id='form-input-control-su-password'
                        control={Input}
                        label='Password'
                        name='password'
                        onChange={(e) => this.handleChange(e)}
                    />
                    
                    <Button type='submit'>Submit</Button>
                </Form>
                <Card.Content extra>
                    <h4>No Account? Sign Up Here</h4>
                </Card.Content>
            </Card.Content>

        </Card>
    )}


}
export default Login