import React from 'react'
import { connect } from 'react-redux'


class Article extends React.Component {

    render() {
        return(
            <li>
                {this.props.title}
            </li>
        )
    }


}

export default Article
