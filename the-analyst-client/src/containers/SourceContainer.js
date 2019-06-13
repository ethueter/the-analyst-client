import React from 'react'
import { connect } from 'react-redux'
import { Segment, Card } from 'semantic-ui-react'
import SourceCard from '../components/sourceCard'


const SourceContainer = (props) => {


    return (


        <Segment>
            <Card.Group>
                {props.sourceList.map(source => <SourceCard {...source} />)}
            </Card.Group>

        </Segment>
    )

}

let mapStateToProps = state => {
    let sourceList = state.source.sources
    return { sourceList: sourceList}
}

export default connect(mapStateToProps)(SourceContainer)