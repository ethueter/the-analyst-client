import React from 'react'
import { connect } from 'react-redux'
import {getArticles } from '../services/article_actions'
import StoryContainer from './StoryContainer'
import _ from 'lodash'
import { Container, Grid } from 'semantic-ui-react'
import { getSources } from '../services/source_actions';
import SearchTerm from '../components/search'
import NewsTicker from '../components/ticker'

class MainContainer extends React.Component {

    componentDidMount() {
        getArticles().then(this.props.showArticles)
        getSources().then(this.props.sources)

    }

    render() {
        return(
            <div>
            <NewsTicker />
            <Grid divided>
                <Grid.Column width={4}>
                    <Container >
                        <SearchTerm />
                    </Container>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Container fluid textAlign='left' scrolling='true'>
                        <StoryContainer />
                    </Container>
                </Grid.Column>
                
            </Grid>
            </div>
        )
    }

}


let mapDispatchToProps = (dispatch) => {
    return {
        showArticles: (articles) => {
            let nonDupList = _.uniqBy(articles.posts, 'title')
            dispatch({ type: 'FETCH_HEADLINES', articles: nonDupList})
        },
        sources: (sources) => {dispatch({ type: 'FETCH_SOURCES', sources: sources})},
        userDetails: (info) => dispatch({ type: 'LOAD_USER_DATA', info: info })

    }
}

export default connect(null, mapDispatchToProps)(MainContainer)