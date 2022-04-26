const userName = document.querySelector('#name');
const email = document.querySelector('#email');
const age = document.querySelector('#number');
const submit = document.querySelector('#submit');
const ok = document.querySelector('.ok-btn');
const display = document.querySelector('.sub-box');

const person = [
    {
        name:'',
        userEmail:'',
        userAge:'',
    }
];

submit.addEventListener('click', (e) => {
    e.preventDefault();
    //for(let i = 0; i<person.length; i++){

    //    person[i].name.push(userName.value);
    //    person[i].userEmail.push(email.value);
    //    person[i].userAge.push(age.value);
        
  //  }
    //    console.log(person);
    const newh1 = document.createElement('H2');
    const newP = document.createElement('P');
    const h1Content = document.createTextNode('Hello ' + userName.value + '!');
    const pContent = document.createTextNode('You have submitted successfully ✔');
    newh1.appendChild(h1Content);
    newP.appendChild(pContent);
    display.appendChild(newh1);
    display.appendChild(newP);
    display.style.display="block";
    userName.value="";
    email.value="";
    age.value="";
});

ok.addEventListener('click', () => {
    display.remove(display);
});


