import React from 'react'
import { Search, Segment } from 'semantic-ui-react'
import _ from 'lodash'
import { connect } from 'react-redux'

class SearchTerm extends React.Component {
    constructor() {
        super()
        this.state = {
            term: ''
        }
    }

    handleSearch = (e) => {
        this.setState({
            term: e.target.value
        })
        this.filterArticles()
    }

    render() {
        return(
            <div>
                <Search
                    onSearchChange={_.debounce(this.handleSearch, 2000, {
                        leading: true,
                    })}
                />
                <Segment>
                    <h3>Quick Search Links:</h3>
                </Segment>
            </div>
        )
    }


}

export default connect()(SearchTerm)