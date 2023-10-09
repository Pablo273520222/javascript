const BODY = document.body;
BODY.classList.add('p-3', 'm-0', 'border-0', 'bd-example');
const LISTGROUPITEM = document.getElementsByClassName('list-group');

const textArray = [
  'A simple default list group item',
  'A simple primary list group item',
  'A simple secondary list group item',
  'A simple success list group item',
  'A simple danger list group item',
  'A simple warning list group item',
  'A simple info list group item',
  'A simple light list group item',
  'A simple dark list group item'
];

const classArrays = [
  [],
  ['list-group-item-primary'],
  ['list-group-item-secondary'],
  ['list-group-item-success'],
  ['list-group-item-danger'],
  ['list-group-item-warning'],
  ['list-group-item-info'],
  ['list-group-item-light'],
  ['list-group-item-dark']
];

for (const LISTGROUP of LISTGROUPITEM) {
  for (let i = 0; i < textArray.length; i++) {
    const LIST = document.createElement('a');
    LIST.href = "#";
    LIST.textContent = textArray[i];
    LIST.classList.add('list-group-item', 'list-group-item-action', ...classArrays[i]);
    LISTGROUP.appendChild(LIST);
  }
}
