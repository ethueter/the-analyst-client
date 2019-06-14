import React from 'react'
import { connect } from 'react-redux'


class UserArticle extends React.Component {

    render() {
        return (
            <li onClick={() => this.props.dispatch({ type: 'MY_ARTICLE', article: this.props})}>
                {this.props.title}
            </li>
        )
    }


}

export default connect()(UserArticle)