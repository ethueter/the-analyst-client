export function submitRating(record) {
    return fetch('https://aqueous-thicket-47637.herokuapp.com/api/user_articles', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Access-Token': localStorage.getItem('token')
        },
        body: JSON.stringify(record)

    }).then(res => res.json())

}