// Add your code here
function submitData(name, email) {
  let formData = {
    name: "Steve",
    email: "steve@steve.com"
  };

  let configObj = {
    method: "POST",
    headers: {
      'content-Type': "application/json",
      'accept': "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch('http://localhost:3000/users', configObj)
  .then(function(resp) {
    return resp.json();
  })
  .then(function(object) {
    document.body.innerHTML = object['id']
  })
  .catch(function(error) {
    document.body.innerHTML = error.message
  });
}