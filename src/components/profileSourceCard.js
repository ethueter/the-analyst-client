import React from 'react'
import { Card, Image, CardHeader, CardDescription, CardMeta } from 'semantic-ui-react'
import _ from 'lodash'
import { frequentSource } from '../services/user_actions';

const ProfileSourceCard = (props) => {
    const source = frequentSource(props.faves, props.sources)
    console.log(source)
    return (
        <Card>
            { source ?
            <Card.Content>
                <Image floated='right' size='small' src={source.image_url} />
                <CardHeader>{source.name}</CardHeader>
                <CardMeta>{_.truncate(source.tagline, { 'length': 50 })}</CardMeta>
                <CardDescription>{_.truncate(source.description, { 'length': 140 })}</CardDescription>
            </Card.Content> :
            <Card.Content>
                <p>No clear leader yet! Keep rating articles, mark your favorites, and come back come back to see the results.</p>
            </Card.Content>
            }
        </Card>
    )
}

export default ProfileSourceCard