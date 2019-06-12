export function submitRating(record) {
    return fetch('http://localhost:3000/api/user_articles', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Access-Token': localStorage.getItem('token')
        },
        body: JSON.stringify(record)

    }).then(res => res.json())

}