const colors = [
    "zielony","czerwony","żółty","biały","czarny"
];

const root = document.querySelector("#root");
console.log(root);
generList(root,colors);




function generList(elem,dane,rodzaj="ul"){
    let list = document.createElement(rodzaj);
    for(const elem of dane){
        const li = document.createElement("li");
        const text = document.createTextNode(elem);
        li.appendChild(text);
        list.appendChild(li);
    }
    elem.appendChild(list);
}