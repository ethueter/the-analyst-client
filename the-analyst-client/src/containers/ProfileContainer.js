import React from 'react'
import { Segment, Header, Grid, GridColumn, Statistic, Button, StatisticLabel, StatisticValue } from 'semantic-ui-react';
import { connect } from 'react-redux'
import {getUserData } from '../services/user_actions'
import UserArticle from '../components/userArticles'
import FullStory from '../components/fullstory';
import { userLean } from '../services/user_actions'
import ProfileSourceCard from '../components/profileSourceCard';

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
                            <Statistic size='large' value={() => userLean(this.props.avg)}/>
                                
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
                                {this.props.faves.map(article => <UserArticle {...article} />)}
                            </div> :
                            <div>
                                <h3>Your Articles</h3>
                                {this.props.articles.map(article => <UserArticle {...article}/>)}
                            </div>
                        }
                    </div>
                    }
                </GridColumn>
            </Grid>
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