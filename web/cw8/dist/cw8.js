import { choices } from "./dane.js";
const choice = document.querySelector("#choice");
addOptions(choices, choice);
// document.querySelector("#submit")?.addEventListener("click",()=>{
//     console.log("fffffff");
// })
document.querySelector("#form_submit")?.addEventListener("submit", (e) => {
    e.preventDefault();
    return false;
});
function addOptions(choices, choice) {
    for (const c of choices) {
        const op = document.createElement("option");
        const txt = document.createTextNode(c);
        op.appendChild(txt);
        choice?.appendChild(op);
    }
}
