import React from 'react'
import { connect } from 'react-redux'
import { Form, Radio, } from 'semantic-ui-react'
import { submitRating } from '../services/rating_actions'
import { getSource} from '../services/source_actions'

class ArticleRating extends React.Component {
    constructor() {
        super()
        this.state = {
            rating: 0,
            favorite: 'false',

        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange = (e, {rating}) => this.setState({ rating: rating})

    handleFavorite = (e, { favorite }) => this.setState({ favorite: favorite })

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.props)
        let source = getSource(this.props.articleId, this.props.sources)
        let newRecord = {
            user_id: localStorage.getItem('current_user_id'),
            article_id: this.props.articleId.id,
            rating: this.state.rating,
            favorite: this.state.favorite,
            visable: true
        }

        submitRating(newRecord).then(result => this.props.dispatch({ type: 'REVEAL_SOURCE', record: result, source: source[0] }))
    }

    render() {
        const {rating} = this.state
        const {favorite} = this.state
        return(
            <div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group inline>
                        <label>Bias Rating: </label>
                        <Form.Field
                            control={Radio}
                            label='Far Left'
                            rating='5'
                            checked={rating == '5'}
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            control={Radio}
                            label='Slightly Left'
                            rating='10'
                            checked={rating == '10'}
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            control={Radio}
                            label='Center'
                            rating='15'
                            checked={rating == '15'}
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            control={Radio}
                            label='Slightly Right'
                            rating='20'
                            checked={rating == '20'}
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            control={Radio}
                            label='Far Right'
                            rating='25'
                            checked={rating == '25'}
                            onChange={this.handleChange}
                        />
                </Form.Group>
                <Form.Group inline>
                        <Form.Field
                            control={Radio}
                            label='Favorite'
                            favorite='true'
                            checked={favorite == 'true'}
                            onChange={this.handleFavorite}
                        />
                        <Form.Button>Rate It!</Form.Button>
                </Form.Group>
            </Form>
            </div>
        )
    }

} 

let mapStateToProps = state => {
    let sources = state.source.sources
    return { sources: sources}
}


export default connect(mapStateToProps) (ArticleRating)