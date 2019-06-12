import React from 'react'
import Article from '../components/article'
import { connect } from 'react-redux'
import FullStory from '../components/fullstory'

class StoryContainer extends React.Component {

    render() {
        return(
            <div>
            { this.props.selected.id ?
                <FullStory /> :
                    <ul style={{ overflow: 'auto', maxHeight: 500 }}>
                    {this.props.articles.map(article => <Article {...article} />)}
                </ul>
            }
            </div>
        )
    }



}


let mapStateToProps = (state) => {
    let articles = state.article.headlines
    let selected = state.article.selected
    return {
        articles: articles,
        selected: selected
    }
}


export default connect(mapStateToProps)(StoryContainer)