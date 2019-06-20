import React from 'react'
import { Segment, Header, Grid, GridColumn, Statistic, Button } from 'semantic-ui-react';
import { connect } from 'react-redux'
import {getUserData } from '../services/user_actions'
import UserArticle from '../components/userArticles'
import FullStory from '../components/fullstory';
import { userLean } from '../services/user_actions'
import ProfileSourceCard from '../components/profileSourceCard';
import { Link } from 'react-router-dom'

class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            showFaves: false,
            reveal: false
        }
    }


    componentDidMount() {
        getUserData(localStorage.getItem('current_user_id')).then(this.props.userDetails)

    }

    handleClick=() => {
        const show = this.state.showFaves
        console.log(this.state.showFaves)
        this.setState({showFaves: !show})
    }

    handleReveal=()=> {
        const x = this.state.reveal
        this.setState({ reveal: !x})
    }

    render() {
        return (
            <div>
            { 
            this.props.user ?
            <div>
                <Segment>
                    <Header size="large">Welcome: {this.props.user.username}</Header>
                </Segment>
                <Grid divided>
                    <GridColumn width='6'>
                        <h3>Profile</h3>
                        <Statistic value={this.props.articles.length} label="Articles Read" />
                        <Statistic value={this.props.faves.length} label="Total Favorites" />
                        <Segment>
                            <h4>Personal Preferance:</h4>
                                <Statistic size='large' color='green' value={() => userLean(this.props.avg)}/>
                                    
                                <h4 >Favorite Source:</h4>
                                <Button onClick={this.handleReveal}>See Your Favorite Source</Button>
                                { this.state.reveal ?
                                    <ProfileSourceCard faves={this.props.faves} sources={this.props.sources} /> :
                                    null

                                }
                        </Segment>
                    </GridColumn>
                    <GridColumn width='10' textAlign='justified'>
                        <div className='ui two buttons'>
                            <Button basic color='green' onClick={this.handleClick}>
                                All Articles
                            </Button>
                            <Button basic color='red' onClick={this.handleClick}>
                                Favorites
                            </Button>
                        </div>
                    {
                        this.props.myArticle.id ?
                        <FullStory /> :
                        <div>
                            {this.state.showFaves ?
                                <div>
                                    <h3>Your Favorites</h3>
                                    <ul style={{ overflow: 'auto', maxHeight: 500 }}>
                                    {this.props.faves.map(article => <UserArticle {...article} />)}
                                    </ul>
                                </div> :
                                <div>
                                    <h3>Your Articles</h3>
                                    <ul style={{ overflow: 'auto', maxHeight: 500 }}>
                                    {this.props.articles.map(article => <UserArticle {...article}/>)}
                                    </ul>
                             </div>
                            }
                        </div>
                    }
                    </GridColumn>
                </Grid>
            </div> :
            <Segment>
                <Grid columns='2'>
                    <GridColumn>
                        <h1>Not Logged In?</h1>
                        <Button as={Link} to='/login' name='login'>Login</Button>
                    </GridColumn>
                    <GridColumn>
                        <h1>Logged in and still here?</h1>
                        <p>Please click on articles on the home page and rate them. Without ratings there are no stats to show you!</p>
                        <Button as={Link} to='/' name='home'>Home</Button>
                    </GridColumn>

                </Grid>
                    
            </Segment>

            }
            </div>
        )
    }

}

let mapStateToProps = state => {
    let user = state.user.user
    let articles = state.user.userArticles
    let myArticle = state.article.myArticle
    let faves = state.user.faves
    let avg = state.user.avg
    let sources = state.source.sources

    return {
        user: user,
        articles: articles,
        myArticle: myArticle,
        faves: faves,
        avg: avg,
        sources: sources
    }

}

let mapDispatchToProps = dispatch => {

    return {
        userDetails: (info) => dispatch({ type: 'LOAD_USER_DATA', info: info})
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)