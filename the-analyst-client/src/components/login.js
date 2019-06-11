import React from 'react'

import SignUp from './signup'
import SignIn from './signin'
import { Card } from 'semantic-ui-react'



const Login = () => {
    return(
        <Card centered='true'>
            <Card.Content header='Login' />
            <Card.Content>
                <SignIn />
                <Card.Content extra>
                    <h4>No Account?</h4><SignUp />
                </Card.Content>
            </Card.Content>

        </Card>
    )}




export default Login