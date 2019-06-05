import React from 'react'
import { Card, Form, Button } from 'semantic-ui-react'


function Login() {

    return(
        <Card centered='true'>
            <Card.Content header='Login' />
            <Card.Content>
                <Form>
                    <Form.Field>
                        <label>Username:</label>
                        <input />
                    </Form.Field>
                    <Form.Field>
                        <label>Password:</label>
                        <input type='password' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
                <Card.Content extra>
                    <h4>No Account? Sign Up Here</h4>
                </Card.Content>
            </Card.Content>

        </Card>
    )


}
export default Login