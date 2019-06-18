import React from 'react'
import { Container, Grid, GridRow, GridColumn } from 'semantic-ui-react';

const about =()=> {

    return(
        <div>
            <Container>
            <h2> About This Site</h2>
            <p>This site is the final project for Tyler Hueter as he completes the 15 week Web Immersive bootcamp.
                The purpose of this site would be to guide individuals to read news stories from sources they would not normally go to.
                Through that people can help determine their own personal preferences/bias and to crowdsource a bias reading for different news sources.
            </p>
            <h2>About this Project </h2>
            <p>This project was an exercise in full stack development. It was concieved and developed over a 3 week period in June 2019. The following technologies were used in the creation of this site:</p>
            <Grid columns={3} divided>
                <GridRow>
                    <GridColumn>
                        <h3>Backend</h3>
                            <ul>
                                <li>Ruby</li>
                                <li>Ruby on Rails</li>
                                <li>Postgresql</li>
                            </ul>
                    </GridColumn>
                    <GridColumn>
                        <h3>Frontend</h3>
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Javascript</li>
                                <li>Semantic UI React</li>
                            </ul>
                    </GridColumn>
                    <GridColumn>
                        <p>News content provided by <a href="www.webhose.io">webhose.io</a></p>
                            <p>Image by <a href="https://pixabay.com/users/congerdesign-509903/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3488861">congerdesign</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3488861">Pixabay</a></p>
                    </GridColumn>
                </GridRow>
            </Grid>
            <h2>About the Author</h2>
            <p>Tyler Hueter has worked in several and varied industries, including non profit performing arts, politics, and most recently transportation.
                As the managing partner in a Taxi company in Charleston, he whitnessed first hand the disruptive and transforative abilities of technology.
                And as small businesses in the transportation industry are closing rapidly, he chose to be on the forefront of change before becoming a victim of it.
                Hope you enjoy the project!
            </p>
            </Container>
        </div>
    )


}
export default about