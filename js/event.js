console.log("Hello from external JS");

// ------> Option 1 - add inline event handaler


// Option2 ---> add onclick function
// We will use this sometimes

{/* <button onclick="makeRed()">Make Red</button> */}

function makeRed (){
    document.body.style.backgroundColor = 'red';
}


// -----> Option 3

// OnClick a fuction call

const blueButton = document.getElementById('make-blue');
blueButton.onclick = function(){
    document.body.style.backgroundColor = 'blue';
}
// Call kora jabe na, tahole code execute hobar somoy er call hoye jabe, Onclick event er jonno wait korbe na.

// ------> Option 3.5

blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// -------> Option 4


const pinkButton = document.getElementById('pink-button');

pinkButton.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}


// -------> Option 4 Another

const greenButton = document.getElementById('green-button');

greenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})


// -------> Final

document.getElementById('orange-button').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange';
})


