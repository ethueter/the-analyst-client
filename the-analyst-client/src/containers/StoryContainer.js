import React from 'react'
import Article from '../components/article'
import { connect } from 'react-redux'
import FullStory from '../components/fullstory'
import '../style.css'

class StoryContainer extends React.Component {

    render() {
        return(
            <div>
                {this.props.selected.id ? 
                    <FullStory /> : 
                    <div className='pointer'>
                        <h3>Top 100 Political Articles</h3>
                        <ul style={{ overflow: 'auto', maxHeight: 500 }}>
                        {this.props.results.length>1 ?
                        this.props.results.map(article => <Article {...article} />):
                        this.props.articles.map(article => <Article {...article} />)
                        }
                        </ul>
                    </div>
            }
            </div>
        )
    }



}


let mapStateToProps = (state) => {
    let articles = state.article.headlines
    let results = state.article.results
    let selected = state.article.selected
    return {
        articles: articles,
        results: results,
        selected: selected
    }
}


export default connect(mapStateToProps)(StoryContainer)