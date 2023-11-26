export class Person{
    firstname:string;
    lastname:string;
    education:string;
    constructor(firstname:string,lastname:string,education:string){
        this.firstname=firstname;
        this.lastname=lastname;
        this.education=education;
    }
    toTableRow():string{
        return `<tr>
        <td>${this.firstname}</td>
        <td>${this.lastname}</td>
        <td>${this.education}</td>
        </tr>`;
    }
}
export const persons:Person[]=[
    new Person("John", "Doe", "podstawowe"),
    new Person("Jane", "Smith", "średnie"),
    new Person("Mike", "Johnson", "wyższe")
];

