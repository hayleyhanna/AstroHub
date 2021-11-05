let pos = 0; //records the position the user is at in the quiz
var correct = 0; //stores the number of questions answered correctly
let quiz = 0;
var quiz_status, question, choice, choices, chA, chB, chB, correct = 0;
//quiz variable contains quiz div
//quiz_status contains the 'quiz_status' heading that displays users progress,
//question contains a question grabbed from the array 
//choice contains user's progress selected answer for a question
//choices contains the possible answers to be displayed
//chA,chB,chC contain each possible answer
let questions = [

    {
        question: "Which galaxy is home to our Solar System?",
        a: "Andromeda",
        b: "Milky Way",
        c: "Circinus",
        answer: "B"
    },
    
    {
        question: "How many moons does Mars have?",
        a: "5",
        b: "6",
        c: "2",
        answer: "C"
    },
    
    {
        question: "What is the name of the largest volcano in the Solar System?",
        a: "Earth's Mauna Kea",
        b: "Mars' Olympus Mons",
        c: "Venus' Maat Mons",
        answer: "B"
    },
    
    {
        question: "How many ice giants are in the Solar System?",
        a: "2",
        b: "5",
        c: "3",
        answer: "A"
    },
   
    {
        question: "What is the name of Earth's closest nebula?",
        a: "Helix Nebula",
        b: "Cat's Eye Nebula",
        c: "NGC 6302 ",
        answer: "A"
    },
    
    {
        question: "Martian relates to which planet in the Solar System?",
        a: "Mars",
        b: "Uranus",
        c: "Mercury",
        answer: "A"
    },
    
    {
        question: "Who was the first person to observe Saturn's rings through a telescope?",
        a: "Edwin Powell Hubble ",
        b: "Claudius Ptolemy",
        c: "Galileo Galilei",
        answer: "C"
    },
    
    {
        question: "Terra is the latin name for which planet in the Solar System?",
        a: "Venus",
        b: "Jupiter",
        c: "Earth",
        answer: "C"
    },
    
    {
        question: "What is the name for the boundary around a black hole, beyond which events cannot affect the observer?",
        a: "Ephemeris",
        b: "Event Horizon",
        c: "Asterism",
        answer: "B"
    },
    
    {
        question: "Which planet is second from the sun?",
        a: "Neptune",
        b: "Saturn",
        c: "Venus",
        answer: "B"
    },
];

function get(x) {
    return document.getElementById(x);
}
//renders a question to display on page load
function renderQuestion() {
    quiz = get("quiz");
    if (pos >= questions.length) {
        quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct.</h2>";
        get("quiz_status").innerHTML = "Quiz completed";
        //resets the variable to allow users to restart the quiz
        pos = 0;
        correct = 0;
        //stops renderQuestion function from running when quiz is completed
        return false;
    }
   
  get("quiz_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    
    question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
    chC = questions[pos].c;
    //display question
    quiz.innerHTML = "<h3>"+question+"</h3>";
    
    //display answer options
    //the += appends to "<h3>"+questions+"</h3>"
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
    quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    // checks if answer matches the correct choice
    if(choice == questions[pos].answer){
      //each time there is a correct answer this value increases
      correct++;
    }
        //changes position of which character user is on
        pos++;
        //then the renderQuestion function runs again to go to next questions
        renderQuestion();
    }
    //event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);
    // ||Navbar||//
//Responsive nav bar,toggles between adding and removing the "responsive" class when the icon is clicked*/
function hamburgerMenu() {
    const navbar = document.getElementById("myTopnav");
    navbar.classList.toggle("responsive");
  }
 
  
