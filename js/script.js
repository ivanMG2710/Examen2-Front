const table = document.getElementById('tableBooks');
const buttonT = document.getElementById('buttonTitle');

//!Fetch get
fetch('http://localhost:5088/api/booksAuthor').then(x => x.json()).then(content => trTable(content));

const trTable = (books) => {
    for(i = 0; i< books.length; i++){
        htmlCode = "<tr>"+
                        "<td>" + books[i].titleBook + "</td>" +
                        "<td>" + books[i].authorBook + "</td>" +
                        "<td>" + books[i].chaptersBook + "</td>" +
                        "<td>" + books[i].pagesBook + "</td>" +
                        "<td> $ " + books[i].priceBook + "</td>" +
                    "</tr>";
        table.insertAdjacentHTML("beforeend", htmlCode);
        htmlCode = "";
    }
};
buttonTitle.addEventListener('clic', ()=>{
    //Accion del boton
    if(buttonTitle.value == ""){
        htmlCode = "<tr>"+
                        "<td>" + books[i].authorBook + "</td>" +
                        "<td>" + books[i].chaptersBook + "</td>" +
                        "<td>" + books[i].pagesBook + "</td>" +
                        "<td> $ " + books[i].priceBook + "</td>" +
                    "</tr>";
        table.insertAdjacentHTML("beforeend", htmlCode);
        htmlCode = "";
    }
  });