import React from 'react'
import { connect } from 'react-redux'
import {getArticles } from '../services/article_actions'
import StoryContainer from './StoryContainer'
import _ from 'lodash'
import { Container, Grid } from 'semantic-ui-react'
import { getSources } from '../services/source_actions';

class MainContainer extends React.Component {

    componentDidMount() {
        getArticles().then(this.props.showArticles)
        getSources().then(this.props.sources)
    }

    render() {
        return(
            
            <Grid divided>
                <Grid.Column width={4}>
                    <Container >
                        <p>this is a test i am testing spacial relations. just goint to keep writing until i figure out where the columns decied to wrop the text.</p>
                    </Container>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Container fluid textAlign='left' scrolling>
                        <StoryContainer />
                    </Container>
                </Grid.Column>
            </Grid>
        )
    }

}


let mapDispatchToProps = (dispatch) => {
    return {
        showArticles: (articles) => {
            let nonDupList = _.uniqBy(articles.posts, 'title')
            console.log('testing',nonDupList)
            dispatch({ type: 'FETCH_HEADLINES', articles: nonDupList})
        },
        sources: (sources) => {dispatch({ type: 'FETCH_SOURCES', sources: sources})}
    }
}

export default connect(null, mapDispatchToProps)(MainContainer)