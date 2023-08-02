let user = prompt('Type your name');
let textOne = `Wake up,${user}...`;
let i = 0;
let speed = 200;

function type() {
    if (i < textOne.length) {
        document.querySelector('.par').textContent += textOne.charAt(i);
        i++;
        setTimeout(type,speed);
    }
    if (i === textOne.length - 1) {
        setTimeout(removeText,3000)
        function removeText(){
            document.querySelector('.par').textContent = '';
        }
        setTimeout (typeTwo,3000)
    }
}
type();

let textTwo = 'The Matrix has you...';
let j = 0;

function typeTwo() {
    if (j < textTwo.length) {
        document.querySelector ('.par').textContent += textTwo.charAt(j);
        j++;
        setTimeout(typeTwo,speed);
    }
    if (j === textTwo.length - 1) {
        setTimeout(removeText,3000)
        function removeText(){
            document.querySelector('.par').textContent = '';
        }
        setTimeout(typeThree,3000)
    }

}

let textThree = 'Follow the white rabbit.';
let h = 0;

function typeThree() {
    if (h < textThree.length) {
        document.querySelector('.par').textContent += textThree.charAt(h);
        h++;
        setTimeout(typeThree,speed);
    }
    if (h === textThree.length - 1) {
        setTimeout(removeText,3000)
        function removeText(){
            document.querySelector('.par').textContent = '';
        }
    }
}

