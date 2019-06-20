import React from 'react'
import { connect } from 'react-redux'
import { commitArticle } from '../services/article_actions';
import '../style.css'

class Article extends React.Component {

    prepArticle() {
        console.log(this.props)
        let sourceUrl = 'www.'.concat(this.props.source_url)
        let src = this.props.sources.find(source => source.source_url == sourceUrl);
        return {...this.props, source_id: src.id}
    }

    putItTogether() {
        commitArticle(this.prepArticle())
            .then(article => this.props.dispatch({ type: 'SELECT_ARTICLE', article: article }))
    }

    

    render() {
        return(
            <li className='pointer' onClick={()=>this.putItTogether()}>
                {this.props.title}
            </li>
        )
    }


}

let mapStateToProps = (state) => {
    let sources = state.source.sources
    return { sources: sources}
}

export default connect(mapStateToProps)(Article)
