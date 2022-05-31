
let elementos = ''
const aplicacion = document.querySelector('.container');
const url= 'https://rickandmortyapi.com/api/character'
fetch(url)
//.then(res => console.log(res)) // me muestra la repuesta  que se solicita  de la api


//capturar la respuesta y la vamos  apasar a formato json




.then(res => res.json())

.then(data => {


   document.getElementById('posts').innerHTML = (data.results['1'].location.name);
   console.log(data.results['1'].location.name)
 })



 // me muestra  todo en formato json
/*.then (data =>{
  data.array.forEach(usuario => {
      
    console.log(usuario.name)
  });
})*/


//.catch(err=> console.log(err)) // nos muestra los errores