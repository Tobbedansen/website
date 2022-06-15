var fields = [['entry.740226251', 'entry.1096451262', 'entry.1492880318'], ['entry.608569745', 'entry.259889842', 'entry.108293155'], ['entry.336244403', 'entry.629190117', 'entry.1549196167']];
var labels = ['Voornaam', 'Naam', 'Geboortedatum'];
const setDatePicker = id => {
  new Pikaday({
    field: document.getElementById(id),
    format: 'dd-mm-YYYY',
    toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    },
    maxDate: new Date(),
    yearRange: 100,
    firstDay: 1
  });
};
const showField = () => {
  let extra = document.querySelector('#extra');
  let childrenLenght = extra.children.length;
  if (childrenLenght === 3) {
    return;
  }
  let node = document.createElement('fieldset');
  let legend = document.createElement('legend');
  legend.textContent = `Deelnemer ${childrenLenght === 0 ? '2' : childrenLenght + 2}`;
  node.appendChild(legend);
  for (let i in fields) {
    let div = document.createElement('div');
    // let label = document.createElement('label');
    let input = document.createElement('input');
    // label.textContent = labels[i];
    // label.setAttribute('class', 'c-lead c-lead--text');
    input.setAttribute('id', fields[childrenLenght][i]);
    input.setAttribute('class', 'textbox-300');
    input.setAttribute('name', fields[childrenLenght][i]);
    input.setAttribute('type', 'text');
    input.setAttribute('required', true);
    input.setAttribute('placeholder', labels[i]);
    // div.appendChild(label);
    div.appendChild(input);
    node.appendChild(div);
  }
  extra.appendChild(node);
  setDatePicker(fields[childrenLenght][2]);
};
const removeField = () => {
  let extra = document.querySelector('#extra');
  if (extra.children.length > 0) {
    extra.removeChild(extra.lastChild);
  }
};
const init = () => {
  setDatePicker('datepicker');
  document.getElementById('btnAdd').addEventListener('click', showField);
  document.getElementById('btnRemove').addEventListener('click', removeField);
};
document.addEventListener('DOMContentLoaded', init);
