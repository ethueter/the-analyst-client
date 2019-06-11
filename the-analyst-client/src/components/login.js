import React from 'react'

import SignUp from './signup'
import SignIn from './signinRe'
import { Card, Button } from 'semantic-ui-react'



class Login extends React.Component {
    state={newUser: false}

    handleNewUser = () => {
        this.setState({ newUser:true})
    }

    render() {
    return(
        <Card centered='true'>
            <Card.Content header='Login' />
            <Card.Content>
                { this.state.newUser ?
                <SignUp /> :
                <SignIn />
                }
                <Card.Content extra>
                    <h4>No Account?</h4><Button onClick={this.handleNewUser}>Sign Up</Button>
                </Card.Content>
            </Card.Content>

        </Card>
    )}
}




export default Login