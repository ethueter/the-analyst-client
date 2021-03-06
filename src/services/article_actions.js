const baseAPI = 'https://webhose.io/filterWebContent?token=594753a7-b50d-468a-81fa-5b14556466cd&format=json&sort=published&q='
const sourceList = '(site%3Acnn.com%20OR%20site%3Amotherjones.com%20OR%20site%3Ahuffpost.com%20OR%20site%3Anbcnews.com%20OR%20site%3Apolitico.com%20OR%20site%3Aaljazeera.com%20OR%20site%3Anpr.org%20OR%20site%3Awsj.com%20OR%20site.propublica.com%20OR%20site%3Aeconomist.com%20OR%20site%3Afoxnews.com%20OR%20site%3Anationalreview.com%20OR%20site%3Atheblaze.com)'
const apiParams ='%20is_first%3Atrue%20language:english'
const hero = 'https://aqueous-thicket-47637.herokuapp.com/'
const local = 'http://localhost:3000/'



export function getArticles(term = 'trump') {
    return fetch(`${baseAPI}${term}${apiParams}${sourceList}`).then(res => res.json())
}

export function commitArticle(article) {
    if (localStorage.getItem('token')) {
        return fetch('https://aqueous-thicket-47637.herokuapp.com/api/articles',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.getItem('token')
            },
            body: JSON.stringify(article)
        }).then(res => res.json())
    } else {
        alert("You must be logged in to read articles.")
        return null

    }

    
}



