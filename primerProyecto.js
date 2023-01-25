const cardContenedor= document.querySelector("#section");
const url = 'https://book-store-mh5a.onrender.com/api/books/list?q=miedo&p=1';

function getApi() {
    fetch(url)
    .then(response => response.json() )
    .then(data => mostrarDatos(data))
    .catch (err => console.log(err))
}
getApi()

function mostrarDatos(datos) {
    cardContenedor.innerHTML += datos.map((item)=>{
        return `
        <div class="container-card" id="container-card">
         <div class="container-img">
         <img src="${item.image}" alt="">
       </div>
          <p>${item.title}</p>
          <p>${item.author}</p>
        </div>
    `
    })
}