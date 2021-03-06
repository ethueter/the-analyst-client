import _ from 'lodash'

export default (state = {headlines: [], selected: {}, results: [], reveal: {}, myArticle: {}}, action) => {
    switch (action.type) {
        case "FETCH_HEADLINES": {
            let convertedData = action.articles.map(article => createNewArticle(article))
            let deDup = _.uniqBy(convertedData, 'title')
            return {...state, headlines: deDup}
            
        }
        
        case "SEARCH": {
            let convertedData = action.articles.map(article => createNewArticle(article))
            console.log('search', convertedData)
            let deDup = _.uniqBy(convertedData, 'title')
            return { ...state, results: deDup }
        }

        case "SELECT_ARTICLE": {
            return {...state, selected: action.article}
        }                

        case "RETURN_TO_LIST": {
            return {...state, 
                selected: {},
                reveal: {},
                results: [],
                myArticle: {}
            }
        }

        case "REVEAL_SOURCE": {
            return {...state, reveal: action.source}
        }

        case "MY_ARTICLE": {
            return {...state,
                reveal: {},
                myArticle: action.article,
                selected: action.article
            }
        }
        
        default: return state;
    }
}

function createNewArticle(oldArticle) {
    let newA = {}
    newA.title = sanitizeTitle(oldArticle.title)
    newA.author = oldArticle.author
    newA.content = sanitizeText(oldArticle.text)
    newA.article_url = oldArticle.url
    newA.image_url = oldArticle.thread.main_image
    newA.source_url = oldArticle.thread.site
    // console.log(newA)
    return newA

}

function sanitizeTitle(title) {
    let newText = _.replace(title, 'CNN', ' ')
    let newText1 = _.replace(newText, 'Mother Jones', ' ')
    let newText2 = _.replace(newText1, 'HuffPost', ' ')
    let newText3 = _.replace(newText2, 'NBC', ' ')
    let newText4 = _.replace(newText3, 'POLITICO', ' ')
    let newText5 = _.replace(newText4, 'Al Jazeera', ' ')
    let newText6 = _.replace(newText5, 'NPR', ' ')
    let newText7 = _.replace(newText6, 'WSJ', ' ')
    let newText8 = _.replace(newText7, 'Fox News', ' ')
    let newText9 = _.replace(newText8, 'National Review', ' ')
    let newText10 = _.replace(newText9, 'The Blaze', ' ')
    let newText11 = _.replace(newText10, 'PROPUBLICA', ' ')
    let newText12 = _.replace(newText11, 'The Economist', ' ')
    let newText13 = _.replace(newText12, 'CNNPolitics', ' ')
    let newText14 = _.replace(newText13, ' - ', ' ')
    let newText15 = _.replace(newText14, 'Politics', ' ')
    
    
    return _.trimEnd(newText15)
}

function sanitizeText(title) {
    let newText = _.replace(title, '(CNN)', ' ')
    let newText1 = _.replace(newText, '(Mother Jones)', ' ')
    let newText2 = _.replace(newText1, '(HuffPost)', ' ')
    let newText3 = _.replace(newText2, '(NBC)', ' ')
    let newText4 = _.replace(newText3, '(POLITICO)', ' ')
    let newText5 = _.replace(newText4, '(Al Jazeera)', ' ')
    let newText6 = _.replace(newText5, '(NPR)', ' ')
    let newText7 = _.replace(newText6, '(WSJ)', ' ')
    let newText8 = _.replace(newText7, '(Fox News)', ' ')
    let newText9 = _.replace(newText8, '(National Review)', ' ')
    let newText10 = _.replace(newText9, '(The Blaze)', ' ')
    let newText11 = _.replace(newText10, '(PROPUBLICA)', ' ')
    let newText12 = _.replace(newText11, '(The Economist)', ' ')
    let newText13 = _.replace(newText12, '(CNNPolitics)', ' ')
    let newText14 = _.replace(newText13, 'CNN', ' ')


    return newText14
}

