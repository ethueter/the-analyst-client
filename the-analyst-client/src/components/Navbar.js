import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Navbar extends React.Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleLogout = (e) => {
        localStorage.removeItem('token')
        this.setState({ activeItem: {} })
    }
    
    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                {
                    localStorage.getItem('token') ?
                        <Menu.Item
                            as={Link}
                            to='/login'
                            name='login'
                            active={activeItem === 'login'}
                            onClick={this.handleLogout}>
                            Logout
                        </Menu.Item> :
                        <Menu.Item
                            as={Link}
                            to='/login'
                            name='login'
                            active={activeItem === 'login'}
                            onClick={this.handleItemClick}
                        >
                            Login
                        </Menu.Item>
                }

                <Menu.Item
                    as={Link}
                    to='/'
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}>
                    Home
                </Menu.Item>

                <Menu.Item
                    as={Link}
                    to='/profile'
                    name='profile'
                    active={activeItem === 'profile'}
                    onClick={this.handleItemClick}>
                    Profile
                </Menu.Item>

                <Menu.Item
                    as={Link}
                    to='/sources'
                    name='sources'
                    active={activeItem === 'sources'}
                    onClick={this.handleItemClick}>
                    Sources
                </Menu.Item>

                <Menu.Item
                    as={Link}
                    to='/about'
                    name='about'
                    active={activeItem === 'about'}
                    onClick={this.handleItemClick}>
                    About
                </Menu.Item>
                 {/* {
                     this.props.username.length >1 ? 
                <Menu.Item
                    as={Link}
                    to='/profile'
                    name='user'
                    position='right'>
                    {this.props.username}
                </Menu.Item>:
                <Menu.Item
                    as={Link}
                    to='/login'
                    name='user'
                    position='right'>
                    Username
                </Menu.Item>
                 } */}
            </Menu>
        )
    }
    


}

let mapStateToProps = (state) => {
    let username = state.user.username
    return { username: username}
}

export default connect(mapStateToProps)(Navbar)