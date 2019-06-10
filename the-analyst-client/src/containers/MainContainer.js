import React from 'react'
import { connect } from 'react-redux'
import {getArticles } from '../services/article_actions'
import Article from '../components/article'
import _ from 'lodash'

class MainContainer extends React.Component {

    componentDidMount() {
        getArticles().then(this.props.showArticles)
    }

    render() {
        return(
            <div>
                <ul>
                {this.props.articles.map(article => <Article {...article}/>)}
                </ul>
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    let articles = state.article.headlines
    return { 
        articles: articles
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        showArticles: (articles) => {
            let nonDupList = _.uniqBy(articles.posts, 'title')
            console.log(nonDupList)
            dispatch({ type: 'FETCH_HEADLINES', articles: nonDupList})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)