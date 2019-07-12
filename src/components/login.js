import React from 'react'
import '../style.css'
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
        <div className='login'>
            <Card centered>
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
            
        </div>
    )}
}




export default Login