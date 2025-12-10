
// const createDiv = document.createElement("div");
// createDiv.innerText = 'Hello lucky';
// document.body.append(createDiv);

const selector = document.querySelector('div');
console.log(selector.textContent);
console.log(selector.innerText);

const createEleH1 = document.createElement('h1');
const boldEle = document.createElement('i');
boldEle.innerHTML = 'Hello bold';
document.body.append(boldEle)
document.body.append(createEleH1);

//
const helloSel = document.querySelector('#hello');
helloSel.style.color = 'red';
helloSel.style.width = '40px';
document.body.append(helloSel);

const byeClassSelector = document.querySelector('.bye');
byeClassSelector.classList.add('bye100');
// byeClassSelector.classList.add('sample');

byeClassSelector.style.fontSize = '30px';
byeClassSelector.style.color = 'green';


byeClassSelector.classList.remove('bye100');

byeClassSelector.setAttribute('id', 'lucky',);

byeClassSelector.removeAttribute('id');

byeClassSelector.classList.remove('bye');


console.log(byeClassSelector);

// Add event lister
// Event Bubbling
// document.getElementById('myDiv1').addEventListener('click', function () {
//     alert('Clicked the Orange Color');
// }, false);

// document.getElementById('myP1').addEventListener('click', function () {
//     alert('Clicked the White Color');
// }, false);

// Event Capturing
document.getElementById('myDiv1').addEventListener('click', function () {
    alert('Clicked the Orange Color');
}, true);

document.getElementById('myP1').addEventListener('click', function () {
    alert('Clicked the White Color');
}, true);

document.getElementById('myP1').removeEventListener('click', function () {
    alert('Clicking');
}, true);









