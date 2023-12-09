export class Person {
    id;
    firstname;
    lastname;
    education;
    constructor(firstname, lastname, education) {
        this.id = (Date.now() + Math.floor(Math.random() * 10000)).toString();
        this.firstname = firstname;
        this.lastname = lastname;
        this.education = education;
    }
}
export const persons = [
    new Person("John", "Doe", "podstawowe"),
    new Person("Jane", "Smith", "średnie"),
    new Person("Mike", "Johnson", "wyższe")
];
