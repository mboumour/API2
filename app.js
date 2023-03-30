const button = document.getElementById('myButton');

button.addEventListener('click', () => {
   fetch('http://localhost:3000/solve', {
   method: 'POST',
   headers: {
   'Content-Type': 'application/x-www-form-urlencoded'
   },
   mode: 'cors',
   body: 'a=5&b=7'
   })

   .then(response => response.text())
   .then(data => console.log(data))
   .catch(error => console.error(error));

});

