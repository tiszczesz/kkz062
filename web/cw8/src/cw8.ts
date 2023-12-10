import { choices } from './dane.js';
import { Person, persons } from './Person.js';
console.log(persons);
let actualPersons = persons;
const choice = document.querySelector('#choice');
addOptions(choices, choice);
// document.querySelector("#submit")?.addEventListener("click",()=>{
//     console.log("fffffff");

// })
document.querySelector('#form_submit')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const firstname = (
    document.querySelector('#firstname') as HTMLInputElement
  )?.value.trim();
  const lastname = (
    document.querySelector('#lastname') as HTMLInputElement
  )?.value.trim();
  const education = (document.querySelector('#choice') as HTMLInputElement)
    ?.value;
  if (firstname == '' || lastname == '') return;
  const person = new Person(firstname, lastname, education);
  (document.querySelector('#firstname') as HTMLInputElement).value = '';
  (document.querySelector('#lastname') as HTMLInputElement).value = '';

  actualPersons.push(person);
  UpdateAndSetClick()
});
UpdateAndSetClick()
function UpdateAndSetClick(){
  (document.querySelector('#result') as HTMLDivElement).innerHTML =
  UpdateTable(actualPersons);
  addClickListener();
}


function addClickListener() {
  const buttons = document.querySelectorAll('td>input[type=button]');
  //console.log(buttons);

  for (const button of buttons) {
    button.addEventListener('click', (event) => {
      const id = (event.target as HTMLInputElement).id;
      console.log(id);      
      actualPersons = actualPersons.filter((p, i) => {
        return p.id !== id;
      });
      console.log(actualPersons);   
      //debugger;   
      UpdateAndSetClick();
        
    });
  }
}

function UpdateTable(persons: Person[]): string {
  let html = `<table class="table table-stripped">
    <tr>
    <th>Lp</th>  <th>Imię</th> <th>Nazwisko</th> <th>Wykształacenie</th>
    </tr> `;
  let lp = 0;
  for (const p of persons) {
    lp++;
    html += `
        <tr>
        <td>${lp}</td><td>${p.firstname}</td><td>${p.lastname}</td>
        <td>${p.education}</td>
        <td><input id="${p.id}" type="button" value="X"/></td>
        </tr>
        `;
  }
  return html + '</table>';
}

function addOptions(choices: string[], choice: Element | null) {
  for (const c of choices) {
    const op = document.createElement('option');
    const txt = document.createTextNode(c);
    op.appendChild(txt);
    choice?.appendChild(op);
  }
}
