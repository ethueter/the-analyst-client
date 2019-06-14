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
}

export function getUserData(id) {
    if (localStorage.getItem('token'))
    return fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Token': localStorage.getItem('token')
        }
    }).then(res => res.json())
}

export function userLean(avg) {
    switch(true) {
        case (avg <= 7):
            return "Far Left"
        
        case (avg > 7 && avg <= 12):
            return "Slightly Left"
        
        case (avg > 12 && avg <= 17):
            return "Center"
        
        case (avg > 17 && avg <= 22):
            return "Slightly Right"
        
        case (avg > 22):
            return "Far Right";
        
        default: 
            return "test"
    }
}

export function frequentSource(list, sources) {
    console.log('list', list)
    console.log('sources', sources)
    let sourceList = list.map( record => record.source_id)
    let mf = 1;
    let m = 0;
    let item;
    for (var i = 0; i < sourceList.length; i++) {
        for (var j = i; j < sourceList.length; j++) {
            if (sourceList[i] == sourceList[j])
                m++;
            if (mf < m) {
                mf = m;
                item = sourceList[i];
            }
        }
        m = 0;
    }
    let source = sources.find(source => source.id == item)
    return source

    console.log(source)

}