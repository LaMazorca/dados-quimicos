const form = document.getElementById('form');
const main = document.getElementById('main');
const options = document.getElementById('options');
const players = document.getElementsByClassName('radio');
const points = document.getElementById('points');
const game = document.getElementById('game');
const displayBet = document.getElementById('display-bet');
const bet = document.getElementsByClassName('bet');
const displayGame = document.getElementById('display-game');
const image = document.getElementById('image');
const question = document.getElementById('question');
const btnLaunch = document.getElementById('btn-launch');
const displayCardPlayer = document.getElementById('card-player');
const firstPlayer = document.getElementById('first-player');
const secondPlayer = document.getElementById('second-player');
const thirdPlayer = document.getElementById('third-player');

const questionLevelOne = [
    {"question": '¿Cuál es el final de su configuración electronica del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Gold-density-atomic-number-mass-radius.png","answers":['5d<sup>10</sup>6s<sup>1</sup>','4f<sup>14</sup>5d<sup>10</sup>','5d<sup>10</sup>6s<sup>5</sup>','5d<sup>10</sup>6s<sup>7</sup>']},
    {"question": '¿Cuál es el final de su configuración electronica del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Silver-density-atomic-number-mass-radius.png","answers":['4d<sup>10</sup>5s<sup>1</sup>','4d<sup>10</sup>5s<sup>2</sup>','5d<sup>10</sup>6s<sup>1</sup>','4p<sup>6</sup>4d<sup>10</sup>']},
    {"question": '¿Cuál es el final de su configuración electronica del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Aluminium-density-atomic-number-mass-radius.png","answers":['3s<sup>2</sup>3p<sup>1</sup>','3s<sup>2</sup>3p<sup>6</sup>','3s<sup>2</sup>3p<sup>5</sup>','3s<sup>2</sup>3p<sup>2</sup>']},
    {"question": '¿Cuál es el final de su configuración electronica del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Copper-density-atomic-number-mass-radius.png","answers":['3d<sup>10</sup>4s<sup>1</sup>','3d<sup>10</sup>4s<sup>2</sup>','4s<sup>2</sup>4p<sup>5</sup>','4s<sup>2</sup>4p<sup>6</sup>']},
    {"question": '¿Cuál es el final de su configuración electronica del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Boron-protons-neutrons-electrons-configuration.png","answers":['2s<sup>2</sup>2p<sup>1</sup>','1s<sup>2</sup>2s<sup>2</sup>','2s<sup>2</sup>2p<sup>2</sup>','2s<sup>2</sup>2p<sup>3</sup>']},
    {"question": '¿Cuál es el final de su configuración electronica del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Cerium-protons-neutrons-electrons-configuration.png","answers":['6s<sup>2</sup>5d<sup>1</sup>','6s<sup>2</sup>5d<sup>2</sup>','6s<sup>2</sup>5d<sup>3</sup>','6s<sup>2</sup>5d<sup>4</sup>']},
    {"question": '¿Cuál es el final de su configuración electronica del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Beryllium-density-atomic-number-mass-radius.png","answers":['1s<sup>2</sup>2s<sup>2</sup>','1s<sup>2</sup>','1s<sup>2</sup>2s<sup>1</sup>','1s<sup>1</sup>']},
    {"question": '¿Cuál es el final de su configuración electronica del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Iron-protons-neutrons-electrons-configuration.png","answers":['4s<sup>2</sup>3d<sup>6</sup>','4s<sup>2</sup>3d<sup>5</sup>','4s<sup>2</sup>3d<sup>7</sup>','4s<sup>2</sup>3d<sup>9</sup>']},
    {"question": '¿Cuál es el final de su configuración electronica del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Lithium-density-atomic-number-mass-radius.png","answers":['1s<sup>2</sup>2s<sup>1</sup>','1s<sup>2</sup>2s<sup>2</sup>','1s<sup>2</sup>','1s<sup>1</sup>']},
    {"question": '¿Cuál es el final de su configuración electronica del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Bromine-density-atomic-number-mass-radius.png","answers":['4s<sup>2</sup>4p<sup>5</sup>','4s<sup>2</sup>4p<sup>4</sup>','4s<sup>2</sup>4p<sup>6</sup>','4s<sup>2</sup>4p<sup>7</sup>']},
    {"question": '¿Cuales son los números cuanticos del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Oxygen-protons-neutrons-electrons-configuration.png","answers":['n=2 l=1 m=1 s=1/2','n=2 l=1 m=0 s=-1/2','n=2 l=1 m=0 s=1/2','n=2 l=1 m=1 s=-1/2']},
    {"question": '¿Cuales son los números cuanticos del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Nitrogen-protons-neutrons-electrons-configuration.png","answers":['n=2 l=1 m=1 s=1/2','n=2 l=1 m=0 s=-1/2','n=2 l=1 m=0 s=1/2','n=2 l=1 m=1 s=-1/2']},
    {"question": '¿Cuales son los números cuanticos del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Helium-protons-neutrons-electrons-configuration.png","answers":['n=1 l=0 m=0 s=-1/2','n=1 l=1 m=0 s=-1/2','n=1 l=0 m=1 s=1/2','n=1 l=0 m=0 s=1/2']},
    {"question": '¿Cuales son los números cuanticos del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Hydrogen-protons-neutrons-electrons-configuration.png","answers":['n=1 l=0 m=0 s=1/2','n=1 l=1 m=0 s=-1/2','n=1 l=1 m=0 s=1/2','n=1 l=1 m=1 s=-1/2']},
    {"question": '¿Cuales son los números cuanticos del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Magnesium-protons-neutrons-electrons-configuration.png","answers":['n=3 l=0 m=0 s=-1/2','n=3 l=1 m=0 s=-1/2','n=3 l=1 m=0 s=1/2','n=3 l=1 m=1 s=-1/2']},
    {"question": '¿Cuales son los números cuanticos del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Zinc-protons-neutrons-electrons-configuration.png","answers":['n=4 l=2 m=-1 s=1/2','n=4 l=2 m=0 s=-1/2','n=4 l=2 m=1 s=1/2','n=4 l=2 m=2 s=-1/2']},
    {"question": '¿Cuales son los números cuanticos del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Calcium-protons-neutrons-electrons-configuration.png","answers":['n=4 l=0 m=10 s=-1/2','n=4 l=1 m=0 s=-1/2','n=4 l=1 m=0 s=1/2','n=4 l=1 m=1 s=-1/2']},
    {"question": '¿Cuales son los números cuanticos del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Mercury-protons-neutrons-electrons-configuration.png","answers":['n=6 l=0 m=0 s=-1/2','n=6 l=1 m=0 s=-1/2','n=6 l=0 m=1 s=1/2','n=6 l=1 m=1 s=-1/2']},
    {"question": '¿Cuales son los números cuanticos del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Carbon-protons-neutrons-electrons-configuration.png","answers":['n=2 l=1 m=0 s=1/2','n=2 l=1 m=0 s=-1/2','n=2 l=0 m=-1 s=1/2','n=2 l=1 m=1 s=-1/2']},
    {"question": '¿Cuales son los números cuanticos del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Oxygen-protons-neutrons-electrons-configuration.png","answers":['n=4 l=0 m=0 s=1/2','n=4 l=0 m=0 s=-1/2','n=4 l=1 m=0 s=1/2','n=4 l=1 m=1 s=-1/2']},
    {"question": '¿Cuál es la familia, el grupo y el perido del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Sodium-protons-neutrons-electrons-configuration.png","answers":['F=A G=I P=3','F=A G=I P=2','F=A G=I P=1','F=A G=I P=4']},
    {"question": '¿Cuál es la familia, el grupo y el perido del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Chlorine-protons-neutrons-electrons-configuration.png","answers":['F=A G=VII P=3','F=A G=VII P=2','F=A G=VII P=1','F=A G=VII P=4']},
    {"question": '¿Cuál es la familia, el grupo y el perido del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Manganese-protons-neutrons-electrons-configuration.png","answers":['F=B G=VII P=4','F=B G=VII P=5','F=B G=VIII P=1','F=B G=VI P=4']},
    {"question": '¿Cuál es la familia, el grupo y el perido del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Sodium-protons-neutrons-electrons-configuration.png","answers":['F=B G=Ac P=7','F=B G=La P=7','F=B G=La P=6','F=B G=Ac P=7']},
    {"question": '¿Cuál es la familia, el grupo y el perido del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Selenium-protons-neutrons-electrons-configuration.png","answers":['F=A G=VI P=4','F=A G=VII P=4','F=A G=VI P=3','F=A G=VII P=3']},
    {"question": '¿Cuál es la familia, el grupo y el perido del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Radium-protons-neutrons-electrons-configuration.png","answers":['F=A G=II P=7','F=A G=II P=6','F=A G=I P=7','F=A G=I P=6']},
    {"question": '¿Cuál es la familia, el grupo y el perido del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Argon-protons-neutrons-electrons-configuration.png","answers":['F=A G=VIII P=3','F=A G=VIII P=2','F=A G=VII P=3','F=A G=VII P=2']},
    {"question": '¿Cuál es la familia, el grupo y el perido del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Cerium-protons-neutrons-electrons-configuration.png","answers":['F=B G=La P=6','F=B G=La P=7','F=B G=Ac P=7','F=B G=Ac P=6']},
    {"question": '¿Cuál es la familia, el grupo y el perido del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Titanium-protons-neutrons-electrons-configuration.png","answers":['F=B G=IV P=4','F=B G=III P=5','F=B G=III P=4','F=B G=IV P=5']},
    {"question": '¿Cuál es la familia, el grupo y el perido del elemento?', 'img':"https://cdn-0.material-properties.org/wp-content/uploads/2020/09/Phosphorus-protons-neutrons-electrons-configuration.png","answers":['F=A G=V P=3','F=A G=V P=1','F=A G=V P=2','F=A G=V P=4']},
];

// const questionLevelTwo = [
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
// ];

// const questionLevelThree = [
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
//     {"question": , "answers":[]},
// ];

const numberEvent = [];
let correctAnswer;
let playerPoints1 = 0;
let wrongs1 = 0;
let playerPoints2 = 0;
let wrongs2 = 0;
let playerPoints3 = 0;
let wrongs3 = 0;
let computerPoints = 0;
let turn = 0;

//Check the value of the radio input for the number of players and check the points
const getData = (player) =>{
    player.map(element => {
        if(element.checked){
            if(element.value === "1"){
                cardPlayer(1,firstPlayer);
            }else if(element.value === "2"){
                cardPlayer(1,firstPlayer);
                cardPlayer(2,secondPlayer);
            }else{
                cardPlayer(1,firstPlayer);
                cardPlayer(2,secondPlayer);
                cardPlayer(3,thirdPlayer);
            }
        }
    });
};

//Cards player (name and win points)
const cardPlayer = (number,player) => {
    displayCardPlayer.classList.remove('invisible');
    player.classList.remove('invisible');
    player.innerHTML = `
        <h2 class="text-2xl my-2">Jugador numero ${number}</h2>
        <h2 class="text-xl my-1">Puntos a Ganar: ${points.value}</h2>
        <h2 class="text-xl my-1">Puntos obtenidos Jugador: <span id="${number}-pj">0</span></h2>
        <h2 class="text-xl my-1">Puntos obtenidos Máquina: <span id="pm">0</span></h2>
        <h2 class="text-xl my-1">Preguntas erroneas: <span id="${number}-pe">0</span></h2>
    `;
};

//Eraser the array of the bet and the mark in the numbers
const eraser = () => {
    for(let i = 0;i<numberEvent.length;i++){
        document.getElementById(numberEvent[i]).classList.remove('bg-fern-frond-200');
        document.getElementById(numberEvent[i]).classList.remove('text-fern-frond-700');
        document.getElementById(numberEvent[i]).classList.remove('border-2');
        document.getElementById(numberEvent[i]).classList.remove('border-fern-frond-700');
        document.getElementById(numberEvent[i]).classList.add('text-fern-frond-200');
        document.getElementById(numberEvent[i]).classList.add('bg-fern-frond-700');
    }
    question.innerHTML='<img id="image" class="size-40 mx-auto my-0 drop-shadow-md" src="https://imgs.search.brave.com/sR2qVFRdMdPw3wlaUXeUWiZBTLK4Lr31DHAASPh0KvE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODk4NzcyOWNiYTk4/NDFlYWJhYjYxN2Iu/cG5n" alt="Imagén de unos daos">';
    numberEvent.splice(0,3);
};

//Check the number bet abd change colors
const dataBet = [...bet].map(
    (btn) => {
        btn.addEventListener("click", (event) => {
            //Obtain the number of the bet and dial it  
            if(numberEvent.length < 3){
                event.target.classList.remove('text-fern-frond-200');
                event.target.classList.remove('bg-fern-frond-700');
                event.target.classList.add('bg-fern-frond-200');
                event.target.classList.add('text-fern-frond-700');
                event.target.classList.add('border-2');
                event.target.classList.add('border-fern-frond-700');
                numberEvent.push(event.target.id);
            }else{
            //Check si the bet is only for three numbers
                const acept = confirm('No puedes escoger más de tres números para apostar ¿Quieres borrrar todas tus apuestas?');
                if(acept){
                    eraser();
                }
            }
        })
    }
);

//Obtain the sum the number of dice
const rollDice = (min,max) => {
    const side = Math.floor(Math.random()*(max - min)) + min;
    return side;
};

//Obtain the points of the question
const checkBet = (i) => {
    let numberBet = numberEvent.includes(i.toString());
    if(numberBet){
        alert(`Perfecto tuviste suerte, el número fue ${i}, listo para la pregunta`);
        questionSoft(Math.floor(Math.random()*30)-1);
    }else{
        alert(`Uy! lo siento fallaste, el número fue ${i}, tu turno ha terminado`)
        eraser();
    }
};

//Question level hard
const questionHard = () => {

};

//Question level average
const questionAverage = () => {

};

//Question level soft
const questionSoft = (i) => {
    let q = questionLevelOne[i];
    let a1 = q.answers;
    correctAnswer = a1[0];
    a1 = a1.sort((a,b)=>a=Math.floor(Math.random()*3)-1);
    let a = a1.map(currentQ=>`<p><button onClick="checkQuestion('${currentQ}')" class="mx-2 text-fern-frond-800"><i class="fa-solid fa-flask"></i></button><span>${currentQ}</span></p>`);
    let aText = a.join(' ')
    image.classList.add('hidden');
    question.innerHTML = `
        <div class="text-fern-frond-900 mx-auto my-4 bg-gradient-to-b from-fern-frond-700 w-fit h-fit border-2 border-fern-frond-950">
            <div class="flex flex-col items-center">
                <img class="size-24 my-2" src="${q.img}">
                <h2 class="text-xl mb-2">${q.question}</h2>
                <div class="flex">${aText}</div>
            </div>
        </div>
    `;
};

//Check question is the answer is rigth or wrong and obtain the points
const checkQuestion = (answer) => {
    if(answer === correctAnswer){
        playerPoints1 += 2;
        changePointsPlayer(1,playerPoints1);
        eraser();
        alert('Buen trabajo')
    }else{
        alert('Fallaste, ha terminado tu turno')
        wrongs1++;
        computerPoints += 2;
        changePointsComputer(computerPoints);
        wrongQuestions(1,wrongs1);
        eraser();
    }

    if(playerPoints1 >= points.value){
        alert('Felicidades has ganado');
    }else if(computerPoints >= points.value || wrongs1 >= 5){
        alert('Lo siento T_T, pero has perdido');
    }
};

//Change the points for player
const changePointsPlayer = (player,points) => {
        document.getElementById(`${player}-pj`).innerHTML = `${points}`;
}  

const changePointsComputer = (points) => {
        document.getElementById(`pm`).innerHTML = `${points}`;
}  

const wrongQuestions = (player,wrong) => {
        document.getElementById(`${player}-pe`).innerHTML = `${wrong}`;
}  

//Get the information of the form
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    main.classList.remove('h-5/6')
    options.className = 'hidden';
    game.classList.remove('hidden');
    getData([...players]);
});

//Function the button launch
btnLaunch.addEventListener('click',()=>{
    const sideDice = rollDice(2,13);
    checkBet(sideDice);
});