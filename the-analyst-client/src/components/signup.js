import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, Modal } from 'semantic-ui-react'

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

    render() {
        return( 
            <Modal trigger={<Button>Sign Up</Button>}>
                <Modal.Header>Create an Account</Modal.Header>
                <Modal.Content >
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

                        <Button onClick={() => this.props.dispatch({ type: 'SIGN_UP', userNew: this.state})}>Submit</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

export default connect()(SignUp)