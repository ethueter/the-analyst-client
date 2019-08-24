import React from 'react'
import { Segment, Grid, GridColumn, GridRow } from 'semantic-ui-react';


function RateEx() {
    return(
        <Segment >
            <h2>About this Project </h2>
            <p>This project was an exercise in full stack development. It was concieved and developed over a 3 week period in June 2019. The following technologies were used in the creation of this site:</p>
            <Grid columns={3} divided>
                <GridRow>
                    <GridColumn>
                        <h3>Back-End</h3>
                        <ul>
                            <li>Ruby</li>
                            <li>Ruby on Rails</li>
                            <li>Postgresql</li>
                        </ul>
                    </GridColumn>
                    <GridColumn>
                        <h3>Front-End</h3>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Javascript</li>

                        </ul>
                    </GridColumn>
                    <GridColumn>
                        <h3>Gems/Libraries</h3>
                        <ul>
                            <li>Bcrypt & JWT</li>
                            <li>lodash</li>
                            <li>React-Router</li>
                            <li>React-Ticker</li>
                            <li>Semantic UI React</li>
                        </ul>

                    </GridColumn>
                </GridRow>
            </Grid>
            <p>News content provided by <a href="www.webhose.io">webhose.io</a></p>
            <p>Image by <a href="https://pixabay.com/users/congerdesign-509903/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3488861">congerdesign</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3488861">Pixabay</a></p>
            <h2>About the Developer</h2>
            <p>Tyler Hueter has worked in several and varied industries, including non profit performing arts, politics, and most recently transportation.
                As the managing partner of a taxi company in Charleston, he witnessed first hand the disruptive and transforative abilities of technology.
                And as small businesses in the transportation industry are closing rapidly, he chose to be on the forefront of change before becoming a victim of it.
                Hope you enjoy the project!
            </p>
            
        </Segment>
    )
}

export default RateEx;