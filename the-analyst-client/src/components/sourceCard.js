import React from 'react'
import { Card, Button, Image, CardHeader, CardDescription, CardMeta } from 'semantic-ui-react'
import _ from 'lodash'

const SourceCard = (props) => {


    return (
        <Card>
            <Card.Content>
                <Image floated='right' size='small' src={props.image_url} />
                <CardHeader>{props.name}</CardHeader>
                <CardMeta>{_.truncate(props.tagline, {'length': 50})}</CardMeta>
                <CardDescription>{_.truncate(props.description, { 'length': 140 })}</CardDescription>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Stats
                    </Button>
                    <Button 
                        as='a' 
                        href={props.source_url} 
                        basic color='red'>
                        Visit Site
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}

export default SourceCard