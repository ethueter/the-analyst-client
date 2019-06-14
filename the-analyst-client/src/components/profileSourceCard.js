import React from 'react'
import { Card, Button, Image, CardHeader, CardDescription, CardMeta } from 'semantic-ui-react'
import _ from 'lodash'
import { frequentSource } from '../services/user_actions';

const ProfileSourceCard = (props) => {
    const source = frequentSource(props.faves, props.sources)
    console.log(source)
    return (
        <Card>
            <Card.Content>
                <Image floated='right' size='small' src={source.image_url} />
                <CardHeader>{source.name}</CardHeader>
                <CardMeta>{_.truncate(source.tagline, { 'length': 50 })}</CardMeta>
                <CardDescription>{_.truncate(source.description, { 'length': 140 })}</CardDescription>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Stats
                    </Button>
                    <Button
                        as='a'
                        href={source.source_url}
                        basic color='red'>
                        Visit Site
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}

export default ProfileSourceCard