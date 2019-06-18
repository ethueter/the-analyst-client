import React from 'react'
import Ticker from 'react-ticker'
import { connect } from 'react-redux'

function rand(min, max) {
    var offset = min
    var range = (max - min) + 1
    var randomNumber = Math.floor(Math.random() * range) + offset
    return randomNumber
}

const NewsTicker = (props) => {
    const articles = props.articles.map(article => article.title)
    console.log(articles)
   return(
       <Ticker
       offset="50%">
           {({index}) => (
               <h1>{articles[rand(0, articles.length - 1)]}</h1>
           )}
       </Ticker>
   )

    
}

let mapStateToProps = state => {
    let articles = state.article.headlines
    return { articles: articles}
}

export default connect(mapStateToProps)(NewsTicker)