// Questions 
const Questions = [
    {
        question:'What is the name of the largest city in West African?', 
        options:['Lagos', 'Accra', 'Cairo','Ibadan'], 
        correctAns:'Ibadan',
        userAns: ''

    },

    {
        question:"Which of the programming language is known as - 'the language of the Web'?",
        options:['HTML','Python','JavaScript','C++'],
        correctAns:"JavaScript",
        userAns:""
    },

    {
        question:"Vitamin C is present in the following except - ",
        options:['Rice','Orange','Pineapple','Watermelon'],
        correctAns:"Rice",
        userAns:""
    },

    {
        question:"_____ is not an eventlistener",
        options:['Click','Onchange','Tapping','Right-click'],
        correctAns:"Tapping",
        userAns:""
    },

    {
        question:"_____ is a type of rainfall in the list.",
        options:['Rain guage','Orographic','Dew','Precipitation'],
        correctAns:"Orographic",
        userAns:""
    },

    {
        question:"Data can be the stored in the structure except? ",
        options:['Function','Turple','Dictionary','List'],
        correctAns:"Function",
        userAns:""
    },

    {
        question:"_____ is used in programming to represent a real-life situation.",
        options:['Functions','Container','Break','Classes'],
        correctAns:"Classes",
        userAns:""
    },

    {
        question:"_____ is a type of rainfall in the list.",
        options:['Rain guage','Orographic','Dew','Precipitation'],
        correctAns:"Orographic",
        userAns:""
    },

    {
        question:"_____ is a type of rainfall in the list.",
        options:['Rain guage','Orographic','Dew','Precipitation'],
        correctAns:"Orographic",
        userAns:""
    },

    {
        question:"One of the importance of user-defined function is that:",
        options:['it reduces repetition and reusability','it contains all modules','it contains fewer lines of code.','instances can be declared with it'],
        correctAns:"Orographic",
        userAns:""
    },

]

// count  variables 
let index = 0;
let numbering = index + 1;
let bonusCount = 0


// step 3 --- Adding Next and Previous pages
let nextPage = document.createElement('button');
nextPage.id = "next-page";
nextPage.innerHTML = "Next"

let previousPage = document.createElement('button');
previousPage.id = "previous-page";
previousPage.innerHTML = "Previous"

// Step 6 - add 50/50
let bonus = document.createElement('button');
bonus.id = "btn-bonus";
bonus.innerHTML = "50/50";



// step 2 Add options to display
option = ""

// userSelection is a function...
function questionOptions(){
    option = ""
    Questions[index].options.forEach((el, i) => {
        option +=
        `<div class="radio-div">
            <input type="radio" name="radio" id="radio${i}" onchange="userSelection('${el}')"
            ${Questions[index].userAns == el ? 'checked' : '' }> 
            <label for = 'radio${i}'>${el}</label>
        </div>`
    })
}


// step4 - collect user response and check against correct answer..
// pass user selection into Questions[index].userAns
function userSelection(message){
    Questions[index].userAns = message
    // console.log(message);
}


// Step 1 Starts 
// on the click of start button (Display question..)
const btnStart = document.getElementById('btn-start');

btnStart.addEventListener('click', viewQuestionDiv);
// function performing all operations upon click 
function viewQuestionDiv(v){
    // console.log('Start') //Function activated....
    
    // btnStart.innerHTML = "Test in progress";
    // add time 
    let time = 60;
    let timer = setInterval(() => {
        time--;
        btnStart.innerHTML = time;
        if (time == 0) {
            clearInterval(timer);
            scorearr = Questions.filter((el) => el.userAns === el.correctAns);
            alert(`You scored ${scorearr.length} out of ${Questions.length}`);
            window.location.href = './index.html'; // Redirect to homepage
        }
    }, 1000);
    
    
    // create a questionbox to display question 
    let questionBox = document.createElement('div');
    questionBox.id = "questionContainer";
    questionBox.className = "questionCont";

    // append div into parent div 
    display.appendChild(questionBox);

    // Style the parent div - display
    display.style.height = "50vh"
    display.style.transition = "0.5s"
    display.style.width = "70%"
    display.style.borderRadius = "20px"
    display.style.border = "none"
    display.style.margin = "auto"
    display.style.marginTop = "30px"
    display.style.backgroundColor = "black"
    display.style.padding = "30px"
    
    let Box = document.getElementById('questionContainer');
    Box.style.border = "2px"
    Box.style.height = "40vh"
    Box.style.width = "80%"
    Box.style.margin = "auto"
    Box.style.backgroundColor = "white"
    Box.style.padding = "20px"


    // step 2 
    // call function 
    questionOptions()
    
    // Fetching first Question from the Question Array and its options
    questionContainer.innerHTML = `
    <h2>${numbering} - ${Questions[index].question}</h2>
    <div>${option}</div>`
    
    // step 3
    // add next and previous bottons 
    display.appendChild(previousPage);

    let stylePrevious = document.getElementById('previous-page');

    previousPage.hidden = true
    
    // add bonus button 
    display.appendChild(bonus);

    let styleBonus = document.getElementById('btn-bonus');
    styleBonus.style.fontSize = "14px"
    styleBonus.style.padding = "8px"
    styleBonus.style.border = "none"
    styleBonus.style.borderRadius = "15px"
    styleBonus.style.marginLeft = "100px"

    // next 
    display.appendChild(nextPage);

    let styleNext = document.getElementById('next-page');
    styleNext.style.fontSize = "14px"
    styleNext.style.padding = "8px"
    styleNext.style.border = "none"
    styleNext.style.borderRadius = "15px"
    styleNext.style.marginLeft = "100px"
    // styleNext.style.marginTop = '20px'

};
// Step 1 Ends

// Step5 - Submit and Score
let scorearr;

// Add event listener to the nextPage button
nextPage.addEventListener('click', () => {
    index++;
    numbering++;

    // Check if it's the last question
    if (index === Questions.length - 1) { 
        // Repplace next with submit
        nextPage.innerHTML = 'Submit';

        // Filter correct answers
        scorearr = Questions.filter((el) => el.userAns === el.correctAns);
    } else if (index >= Questions.length) { // New condition
        // Handle submit button click
        submitQuiz();
        // return; // Exit the function to prevent further execution
    } else {
        questionOptions();
    }

    // Display next question
    if (index < Questions.length) {
        questionContainer.innerHTML = `
            <h2>${numbering} - ${Questions[index].question}</h2>
            <div>${option}</div>`;
        previousPage.style.display = "inline";
    }
});

// Function to handle submit button click
function submitQuiz() {
    // Display alert with score
    alert(`You scored ${scorearr.length} out of ${Questions.length}`);
    window.location.href = './index.html'; // Redirect to homepage
}


// Add event listener to the previousPage button
previousPage.addEventListener('click', () => {
    if (index === Questions.length) { // If currently on the final page
        nextPage.innerHTML = 'Next'; // Change "Submit" back to "Next"
    }

    if (index > 0) { // Check if index is greater than 0 to avoid going negative
        index--;
        numbering--;

        // Display previous question
        questionOptions();
        questionContainer.innerHTML = `
            <h2>${numbering} - ${Questions[index].question}</h2>
            <div>${option}</div>`;
    }
});

let numberOfBonus = 3;
bonus.addEventListener('click', el => {
    bonusCount ++;
    // Run bonus 3 times 
    if (bonusCount > numberOfBonus) {
        alert('Used up...')
    } else {
        
        // extract the correct answer 
        Questions[index].options.splice(Questions[index].options.indexOf(Questions[index].correctAns), 1)
        Questions[index].options.splice(1, 2)
        Questions[index].options.push(Questions[index].correctAns)
        
        questionOptions()
        questionContainer.innerHTML = `
            <h2>${numbering} - ${Questions[index].question}</h2>
            <div>${option}</div>`;
    
    }
})