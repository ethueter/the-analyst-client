import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

class SourceReveal extends React.Component {


    render() {

        return(
            <Card>
                <Image src={this.props.source.image_url} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>This Article Came From: </Card.Header>
                        <h1>{this.props.source.name}</h1>
                    <Card.Description>
                        {this.props.source.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button onClick={()=> this.props.dispatch({ type: 'RETURN_TO_LIST'})}>Return to List</Button>
                </Card.Content>
            </Card>
            
        )
    }
}

let mapStateToProps = state => {
    let source = state.article.reveal
    return {
        source: source
    }
}
export default connect(mapStateToProps) (SourceReveal)