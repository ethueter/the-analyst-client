export function login(info) {
    return fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)

    }).then(res => res.json())
}

export function newUser(info) {
    return fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    }).then(res => res.json())
    .then(user => {
        if (user.id) {
            let newU = {username: user.username, password: user.password}
            login(newU).then(res => res.json())
        } else {
            return user.errors.full_messages
        }
    })
}