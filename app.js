// Elements
const currentPhoto = document.getElementById('current-photo');
const msg = document.getElementById('msg');
const icon_1 = document.getElementById('icon-1');
const icon_2 = document.getElementById('icon-2');

// Word Bank Elements
const word_1 = document.getElementById('wb-1-btn');
const word_2 = document.getElementById('wb-2-btn');
const word_3 = document.getElementById('wb-3-btn');

// Event Listeners
word_1.addEventListener('click', checkAnswer);
word_2.addEventListener('click', checkAnswer);
word_3.addEventListener('click', checkAnswer);

// Image and Answer arrays
let images = [];
let answers = [];

images[0] = './img/ball-rs.jpg';
images[1] = './img/bear-rs.jpg';
images[2] = './img/cat-rs.jpg';
images[3] = './img/dog-rs.jpg';
images[4] = './img/fox-rs.jpg';
images[5] = './img/frog-rs.jpg';
images[6] = './img/kite-rs.jpg';
images[7] = './img/pig-rs.jpg';
images[8] = './img/sun-rs.jpg';
images[9] = './img/train-rs.jpg';
images[10] = './img/horse-rs.jpg';
images[11] = './img/sheep-rs.jpg';
images[12] = './img/duck-rs.jpg';
images[13] = './img/drum-rs.jpg';
images[14] = './img/boat-rs.jpg';
images[15] = './img/clock-rs.jpg';
images[16] = './img/shoes-rs.jpg';
images[17] = './img/house-rs.jpg';
images[18] = './img/cloud-rs.jpg';
images[19] = './img/fish-rs.jpg';
images[20] = './img/bed-rs.jpg';
images[21] = './img/books-rs.jpg';
images[22] = './img/pie-rs.jpg';
images[23] = './img/bus-rs.jpg';
images[24] = './img/bee-rs.jpg';
images[25] = './img/key-rs.jpg';
images[26] = './img/hat-rs.jpg';
images[27] = './img/egg-rs.jpg';
images[28] = './img/map-rs.jpg';
images[29] = './img/bird-rs.jpg';
images[30] = './img/tree-rs.jpg';
images[31] = './img/guitar-rs.jpg';
images[32] = './img/cow-rs.jpg';
images[33] = './img/flower-rs.jpg';
images[34] = './img/tractor-rs.jpg';
images[35] = './img/carrot-rs.jpg';
images[36] = './img/broccoli-rs.jpg';
images[37] = './img/blueberries-rs.jpg';
images[38] = './img/strawberry-rs.jpg';
images[39] = './img/bread-rs.jpg';
images[40] = './img/zebra-rs.jpg';
images[41] = './img/rabbit-rs.jpg';
images[42] = './img/fork-rs.jpg';
images[43] = './img/spoon-rs.jpg';
images[44] = './img/moon-rs.jpg';
images[45] = './img/lion-rs.jpg';
images[46] = './img/tiger-rs.jpg';
images[47] = './img/apple-rs.jpg';

answers[0] = "ball";
answers[1] = "bear";
answers[2] = "cat";
answers[3] = "dog";
answers[4] = "fox";
answers[5] = "frog";
answers[6] = "kite";
answers[7] = "pig";
answers[8] = "sun";
answers[9] = "train";
answers[10] = "horse";
answers[11] = "sheep";
answers[12] = "duck";
answers[13] = "drum";
answers[14] = "boat";
answers[15] = "clock";
answers[16] = "shoes";
answers[17] = "house";
answers[18] = "cloud";
answers[19] = "fish";
answers[20] = "bed";
answers[21] = "books";
answers[22] = "pie";
answers[23] = "bus";
answers[24] = "bee";
answers[25] = "key";
answers[26] = "hat";
answers[27] = "egg";
answers[28] = "map";
answers[29] = "bird";
answers[30] = "tree";
answers[31] = "guitar";
answers[32] = "cow";
answers[33] = "flower";
answers[34] = "tractor";
answers[35] = "carrot";
answers[36] = "broccoli";
answers[37] = "blueberries";
answers[38] = "strawberry";
answers[39] = "bread";
answers[40] = "zebra";
answers[41] = "rabbit";
answers[42] = "fork";
answers[43] = "spoon";
answers[44] = "moon";
answers[45] = "lion";
answers[46] = "tiger";
answers[47] = "apple";


// Word Bank Array

const wordBank = [];

wordBank[0] = word_1;
wordBank[1] = word_2;
wordBank[2] = word_3;


// Initalize game

let currentPic = '';
let correctAnswer = '';

function newGame() {

    resetClasses();

    const wordBankIndexes = [0, 1, 2];
    let answerIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

    // Set Current Picture
    currentPic = Math.floor(Math.random() * images.length);
    currentPhoto.src = images[currentPic];

    // Set answer in word bank
    let answerPosition = Math.floor(Math.random() * wordBank.length);
    wordBank[answerPosition].value = answers[currentPic];
    correctAnswer = answers[currentPic];

    // Remove correct answer from word bank 
    wordBankIndexes.splice(answerPosition, 1);
    answerIndexes.splice(currentPic, 1);

    // Fill word bank with random wrong answers
    while (wordBankIndexes[0] != null) {

        let wrongAnswer = Math.floor(Math.random() * answerIndexes.length);
        wordBank[wordBankIndexes[0]].value = answers[answerIndexes[wrongAnswer]];
        wordBankIndexes.splice(0, 1);
        answerIndexes.splice(wrongAnswer, 1);
    }
}

function checkAnswer() {

    if (this.value === correctAnswer) {
        this.className = 'correct';
        word_1.disabled = true;
        word_2.disabled = true;
        word_3.disabled = true;
        icon_1.className = 'fas fa-award fa-2x';
        icon_2.className = 'fas fa-award fa-2x';
        msg.innerHTML = `You got it! <br>${this.value} is correct`;
        setTimeout(() => {
            msg.innerHTML = '';
            this.classList.remove('correct');
            newGame();
        }, 1450);
    }

    else {
        this.className = 'incorrect';
        icon_1.className = 'fas fa-ban fa-2x';
        icon_2.className = 'fas fa-ban fa-2x';
        msg.innerHTML = `Sorry, ${this.value} is not correct...<br> Try Again!`;
        this.disabled = true;
        setTimeout(() => {
            msg.innerHTML = '';
            icon_1.className = '';
            icon_2.className = '';
        }, 1450);
    }
}

function resetClasses() {

    word_1.className = '';
    word_2.className = '';
    word_3.className = '';

    icon_1.className = '';
    icon_2.className = '';

    word_1.disabled = false;
    word_2.disabled = false;
    word_3.disabled = false;
}

newGame();