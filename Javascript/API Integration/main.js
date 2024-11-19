endpoint1="https://official-joke-api.appspot.com/jokes/programming/random";

fetch(endpoint1)
.then(response => response.json()) // returns promise 
.then(data => console.log(data))
.catch(error => console.error("Error " + error));



endpoint2="https://reqres.in/api/users";

let my_data = {
    name: 'Mr Malik',
    job: 'Programmer'
}

fetch(endpoint2,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(my_data)
})
.then(response => response.json()) //promise
.then(data => console.log(data))
.catch(error => console.error('Error:', error))