import React from 'react'
import { connect } from 'react-redux'
import { Button, Image, Modal, Statistic } from 'semantic-ui-react'
import { getStats, sourceRating } from '../services/source_actions'

class SourceStatModal extends React.Component {

    handleClick = (e, id) => {
        console.log(this.props)
        getStats(id).then(this.props.sourceStats)
    }

    render() {
    return(
        <Modal trigger={<Button onClick={(e) => this.handleClick(e, this.props.source.id)}>See Stats</Button>}>
        <Modal.Header>{this.props.source.name}</Modal.Header>
        <Modal.Content image>
            <Image wrapped size='medium' src={this.props.source.image_url} />
            <Modal.Description>
                <Statistic label='Articles Read' value={this.props.num_articles} />
                <h3>Bias Rating</h3>
                <h2>{sourceRating(this.props.rating)}</h2>
            </Modal.Description>
        </Modal.Content>
    </Modal>
    )
    }
}

let mapStateToProps = state => {
    let rating = state.source.rating
    let num_articles = state.source.total
    let visable = state.source.stats
    return {
        rating: rating,
        num_articles: num_articles,
        visable: visable
    }
}

let mapDispatchToProps = dispatch => {
    return {
        sourceStats: (data) => dispatch({ type: 'FETCH_STATS', rating: data.rating, total: data.total })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SourceStatModal)