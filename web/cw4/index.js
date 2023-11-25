const Book1 = {
  //pola
  title: 'ABC JavaScript',
  price: 23.89,
  realiseDate: new Date('2005-12-09'),
  //metody
  info: function () {
    return `
            <div>Tytuł: ${this.title}</div>
            <div>cena: ${this.price} zł</div>
            <div>data wydania: ${this.realiseDate.toLocaleDateString()} 
                   </div>
        `;
  },
};

function Film(title, author, price, length) {
  //fields
  this.title = title;
  this.author = author;
  this.price = price;
  this.length = length;
  //methods
  this.toString = function () {
    return `${this.title} ${this.author} ${this.price} zł
        ${this.length}`;
  };
}
const films = [
  new Film('Rybki 2', 'Grażyna Małecka', 34.78, 110),
  new Film('Rybki 3', 'Grażyna Małecka', 34.78, 110),
  new Film('saaaad', 'Grażyna Małecka', 34.78, 110),
  new Film('rrrrrr2', 'Grażyna Małecka', 34.78, 110),
  new Film('Rybki 2', 'Grażyna Małecka', 34.78, 110),
];
function FilmsToList(films) {
  let html = `<ol class="list-group">`;
  for (const film of films) {
    html += `<li class="list-group-item">${film}</li>`;
  }
  return html + '</ol>';
}
function FilmToTable(films){
  let html = `<table class="table table-stripped"><tr>
  <th>Tytuł</th><th>autor</th><th>cena</th><th>czas</th>
  </tr>`;
  for(const f of films){
    html+=`<tr>
      <td>${f.title}</td>
      <td>${f.author}</td>
      <td>${f.price}</td>
      <td>${f.length}</td>
    </tr>`
  }
  return html+ "</table>";
}

class Student {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  // firstname;
  // lastname;
  // age;
  info() {
    return `
        <div class="card" style="width: 18rem;">           
            <div class="card-body"> 
            <h5 class="card-title bg-light p-2">Informacje o studencie</h5>
                ${this.firstname} ${this.lastname} wiek: ${this.age}
            </div>        
        </div>`;
  }
}
const s1 = new Student('Andrzej', 'Nowak', 23);
document.querySelector('#root3').innerHTML = s1.info();
document.querySelector('#root').innerHTML = Book1.info();
document.querySelector('#root2').innerHTML = FilmToTable(films);
