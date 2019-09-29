import React from 'react'
import { Input, Segment, List, Button } from 'semantic-ui-react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { getArticles } from '../services/article_actions'

class SearchTerm extends React.Component {
    constructor() {
        super()
        this.state = {
            term: ''
        }
    }

    handleSearch = (e) => {
        e.preventDefault()
        this.setState({
            term: e.target.value
        })
    }

    handleQuick = (e, { value }) => {
        getArticles(value).then(this.props.showArticles)
        
    }

    sendSearch(term) {
        getArticles(term).then(this.props.showArticles)
    }

    render() {
        console.log('quick', this.state.term)
        return(
            <div>
                <Input 
                    onChange={this.handleSearch}
                />
                <Button onClick={()=>this.sendSearch(this.state.term)}>Search</Button>
                <Segment>
                    <h3>Quick Search Links:</h3>
                    <List link>
                        <List.Item as='a' value='Trump' onClick={this.handleQuick}>Trump</List.Item>
                        <List.Item as='a' value='Republican' onClick={this.handleQuick}>Republican</List.Item>
                        <List.Item as='a' value='Democrat' onClick={this.handleQuick}>Democrat</List.Item>
                        <List.Item as='a' value='Election' onClick={this.handleQuick}>Election</List.Item>
                        <List.Item as='a' value='2020' onClick={this.handleQuick}>2020</List.Item>
                        <List.Item as='a' value='Congress' onClick={this.handleQuick}>Congress</List.Item>
                        <List.Item as='a' value='Senate' onClick={this.handleQuick}>Senate</List.Item>
                        <List.Item as='a' value='Impeachment' onClick={this.handleQuick}>Impeachment</List.Item>
                        <List.Item as='a' value='Ukraine' onClick={this.handleQuick}>Ukraine</List.Item>
                    </List>
                </Segment>
                <Segment>
                    <h3>Please Note:</h3>
                    <p>As we are working to improve the site's ability to remove information about the source of an article, the system is not perfect. Some articles may contain references to their origin. 
                        Please excuse the error and know we are working to improve it.
                    </p>
                </Segment>
            </div>
        )
    }


}

let mapDispatchToProps = dispatch => {
    return {
        showArticles: (articles) => {
            let nonDupList = _.uniqBy(articles.posts, 'title')
            dispatch({ type: 'SEARCH', articles: nonDupList })
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchTerm)