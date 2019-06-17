

export function getSources() {
    return fetch('http://localhost:3000/api/sources')
    .then(res => res.json())
}

export function getSource(article, sources) {
    let origin = sources.filter(source => source.id == article.source_id)
    return origin
}

export function getStats(source_id) {
    return fetch(`http://localhost:3000/api/sources/${source_id}`)
    .then(res => res.json())
}

export function sourceRating(rating) {
    switch (true) {
        case (rating <= 7):
            return "Far Left"

        case (rating > 7 && rating <= 12):
            return "Slightly Left"

        case (rating > 12 && rating <= 17):
            return "Center"

        case (rating > 17 && rating <= 22):
            return "Slightly Right"

        case (rating > 22):
            return "Far Right";

        default:
            return "Not enough reviews"
    }
}