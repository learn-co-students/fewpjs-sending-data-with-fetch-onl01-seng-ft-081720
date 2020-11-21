// Add your code here
function submitData(user_name, user_email) {
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: user_name,
            email: user_email
        })
        };
        return fetch("http://localhost:3000/users", configObj)
            .then(function(resp) {
                return resp.json();
            })
            .then(function(object) {
                let newObj = document.createElement("p")
                newObj.innerHTML = object.id
                document.body.appendChild(newObj)

            })
            .catch(function(error) {
                let newObj = document.createElement("p")
                newObj.innerHTML = error.message
                document.body.appendChild(newObj)
              });
}