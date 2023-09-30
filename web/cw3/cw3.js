const colors = [
  ['purple', 'fioletowy'],
  ['red', 'czerwony'],
  ['green', 'zielony'],
  ['yellow', 'żółty'],
  ['white', 'biały'],
];
const root = document.querySelector('#root');

const createSelect = (elem, data) => {
  const select = document.createElement('select');
  data.forEach((e, index) => {
    const option = document.createElement('option');
    option.value = e[0];
    const text = document.createTextNode(e[1]);
    option.appendChild(text);
    console.log(option);
    select.appendChild(option);
  });
  elem.appendChild(select);
  select.addEventListener('change', (event) => {
    console.log(event.target.value);
    document.body.style.backgroundColor = event.target.value;
  });
  document.body.style.backgroundColor = select.value;
};

createSelect(root, colors);
