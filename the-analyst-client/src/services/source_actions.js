

export function getSources() {
    return fetch('http://localhost:3000/api/sources')
    .then(res => res.json())
}

export function getSource(article, sources) {
    let origin = sources.filter(source => source.id == article.source_id)
    return origin
}