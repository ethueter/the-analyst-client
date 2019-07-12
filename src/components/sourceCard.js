import React from 'react'
import { connect } from 'react-redux'
import { Card, Image, CardHeader, CardDescription, CardMeta } from 'semantic-ui-react'
import _ from 'lodash'
import SourceStatModal from './sourceStats'



class SourceCard extends React.Component {
    

    
    render() {
    return (
        <Card>
            
            <Card.Content>
                <Image floated='right' size='small' src={this.props.image_url} />
                <CardHeader>{this.props.name}</CardHeader>
                <CardMeta>{_.truncate(this.props.tagline, { 'length': 50 })}</CardMeta>
                <CardDescription>{_.truncate(this.props.description, { 'length': 140 })}</CardDescription>
            </Card.Content>
            <Card.Content extra>
                <SourceStatModal basic color='green' source={this.props}/>
                   
            </Card.Content>
               
            
        </Card>
    )
    }
} 






export default connect() (SourceCard)