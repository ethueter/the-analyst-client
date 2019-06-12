import React from 'react'
import { connect } from 'react-redux'
import { Segment, Image} from 'semantic-ui-react'
import ArticleRating from './rating'
import SourceReveal from './sourceReveal'


const FullStory = (props) => {

    return(
        <div> {
            props.source.id ?
            <SourceReveal /> :
            <Segment style={{ overflow: 'auto', maxHeight: 500 }}>
                <Segment>
                    <ArticleRating articleId={props.article} />
                </Segment>
                <h2>{props.article.title}</h2>
                <Image src={props.article.image_url} size="medium" />
                <p>{props.article.content}</p>
            </Segment>
        }
        </div>
    )

}

let mapStateToProps = (state) => {
    let article = state.article.selected
    let source = state.article.reveal
    return {
        article: article,
        source: source
    }
}
export default connect(mapStateToProps)(FullStory)