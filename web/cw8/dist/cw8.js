import { choices } from './dane.js';
import { Person, persons } from './Person.js';
const choice = document.querySelector('#choice');
addOptions(choices, choice);
// document.querySelector("#submit")?.addEventListener("click",()=>{
//     console.log("fffffff");
// })
document.querySelector('#form_submit')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstname = document.querySelector('#firstname')?.value.trim();
    const lastname = document.querySelector('#lastname')?.value.trim();
    const education = document.querySelector('#choice')
        ?.value;
    if (firstname == '' || lastname == '')
        return;
    const person = new Person(firstname, lastname, education);
    document.querySelector('#firstname').value = '';
    document.querySelector('#lastname').value = '';
    persons.push(person);
    console.log(persons);
    document.querySelector('#result').innerHTML =
        UpdateTable(persons);
});
document.querySelector('#result').innerHTML =
    UpdateTable(persons);
function UpdateTable(persons) {
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
        <td><input type="button" value="X"/></td>
        </tr>
        `;
    }
    return html + '</table>';
}
function addOptions(choices, choice) {
    for (const c of choices) {
        const op = document.createElement('option');
        const txt = document.createTextNode(c);
        op.appendChild(txt);
        choice?.appendChild(op);
    }
}
