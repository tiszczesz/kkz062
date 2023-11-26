export class Person {
    firstname;
    lastname;
    education;
    constructor(firstname, lastname, education) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.education = education;
    }
    toTableRow() {
        return `<tr>
        <td>${this.firstname}</td>
        <td>${this.lastname}</td>
        <td>${this.education}</td>
        
        </tr>`;
    }
}
export const persons = [
    new Person("John", "Doe", "podstawowe"),
    new Person("Jane", "Smith", "średnie"),
    new Person("Mike", "Johnson", "wyższe")
];
