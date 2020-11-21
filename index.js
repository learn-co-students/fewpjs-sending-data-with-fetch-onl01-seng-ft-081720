// Add your code here

function submitData(name, email) {

// makes a POST request to /user with a name and email

     return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name,
    email
  })
});



// handles the POST request response, retrieves the new id value and appends it to the DOM:










}







