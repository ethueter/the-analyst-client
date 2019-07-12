import React from 'react'
import { Container, Grid, GridRow, GridColumn } from 'semantic-ui-react';

const about =()=> {

    return(
        <div>
            <Container textAlign='justified'>
            <h2> Concept</h2>
            <p>As Americans we live in one of the most polarizing times in our nation's history. Politics and political beliefs are the drivers of this change in our society.
                One of the main questions of our time is how are are we informed? Is the information we are basing our decisions and beliefs on reliable and trustworthy? In short...Fake News.
                This site does not attempt to claim the abiltiy or resources to verify all the claims made or fact presented in the news today. Instead, it attempts to address another issue that has stemmed from this national division.
            </p>
            <p>
                Where Americans get their news is increasingly defined by which camp they have chosen. If they have sided with the left or liberal side, people tend to turn to CNN, Mother Jones or HuffPost for their news. Conversely, 
                those siding on the right or conservatively rely on Fox News, the Blaze, or the National Review. Increasingly people will not cross the lines and seek information from sources linked (truthfully, or just in opinion) to the other side.
                Tuning out the other side and just assuming they are wrong or their news is fake will only cause more harm and division. This site attemps to shed some light on this.
            </p>

            <h2>How this site works</h2>
            <p>
                The goal of this site is to get people to read news articles from all sides. To accomplish this the site provides between 75 and 100 of the most recent political (or whatever the user has searched for) stories and MASKS their source.
                Readers then have the ability to rate each article with what bias they believe the article has. They also have the ability to tag articles as favorites. Only once a user has submitted a rating will they be able to see they source of the article.
                The data collected from those submission is then compiled to provide a bias rating for the news source as well as the individual reader.
            </p>
            <p>So the question is...</p>
            <h3>How do you rate the news...when you don't know where it is coming from?</h3>
            
            </Container>
        </div>
    )


}
export default about