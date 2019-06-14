import React from 'react'
import { connect } from 'react-redux'
import { Segment, Image, Button} from 'semantic-ui-react'
import ArticleRating from './rating'
import SourceReveal from './sourceReveal'


const FullStory = (props) => {

    return(
        <div> {
            props.source.id ?
            <SourceReveal /> :
            <Segment style={{ overflow: 'auto', maxHeight: 500 }}>
                <Segment> {
                    props.myArticle.id ?
                    <Button onClick={() => props.dispatch({ type: 'RETURN_TO_LIST'})}>Return to List</Button>:
                    <ArticleRating articleId={props.article} />
                }
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
    let myArticle = state.article.myArticle
    return {
        article: article,
        source: source,
        myArticle: myArticle
    }
}
export default connect(mapStateToProps)(FullStory)