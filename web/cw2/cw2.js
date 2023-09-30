const colors = [
    "zielony","czerwony","żółty","biały","czarny"
];

const root = document.querySelector("#root");
console.log(root);
generList(root,colors);
generList(root,colors,"ol");
//generList(root,colors,55);




function generList(elem,dane,rodzaj="ul"){
    let list = document.createElement(rodzaj);
    for(const elem of dane){
        const li = document.createElement("li");
        const text = document.createTextNode(elem);
        li.appendChild(text);
        list.appendChild(li);
        li.addEventListener("click", (event)=> {
            event.target.style.color = event.target.style.color === "red" ? 
           "black" : "red";
        });
    }
    elem.appendChild(list);
}