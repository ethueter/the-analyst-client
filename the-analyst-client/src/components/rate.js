import React from 'react'
import { Segment } from 'semantic-ui-react';


function RateEx() {
    return(
        <Segment textAlign='justified'>
            <h1>How to work this site.</h1>
            <p>This site is design to take input from you the user and use that info to determine the political leansing of some of the nations top news sources.
                So first sign up for an account. Then search for articles or just choose one from the list. Once you select an article make sure you read it in its entirety.
                As you read, keep several things in mind:
            </p>
            <ul>
                <li>Does the article present both sides of a story?</li>
                <li>Does the author inject their own opinion?</li>
                <li>Just because an article presents some objects as positive/negative, does not mean that their is bias involved. </li>
                <li>And...Check your own preferences at the door!(We know you won't which is why we rate you too)</li>
            </ul>
            <p>Now make your decision if an article contains a bias to liberal or conservative and submit your rating!</p>
        </Segment>
    )
}

export default RateEx;