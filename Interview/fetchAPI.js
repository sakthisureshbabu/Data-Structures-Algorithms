// Write an example of fetching data using fetch API

fetch('https://api.github.com/users/gaearon/repos')
    .then(res => res.json())
    .then(data => {
        console.log("Success", data);
    })
    .catch(err => {
        console.log("Error", err);
    })