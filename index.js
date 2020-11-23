function submitData(username, email){
    const info = {
        name: username,
        email: email
    }

    const configObject = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(info)
    }

    return fetch("http://localhost:3000/users", configObject)
        .then(function(response){
            return response.json()
        })
        .then(function(json){
            let id = json["id"]
            const div = document.createElement("div")
            div.innerHTML = id
            document.body.appendChild(div)
        })
        .catch(function(error){
            let msg = document.createElement("p")
            msg.innerHTML = error.message
            document.body.appendChild(msg)
        })
}
