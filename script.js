const gameField = document.getElementById('play-field');
const headerRow = document.getElementById("header-row");

class Game {
    constructor() {
        this.score = 0;
        this.questions = GetQuestions();
        this.name;
    }

    ClearGame(){
        while(gameField.childElementCount>0){
        gameField.removeChild(gameField.lastChild);
        }
    }

    PrintMenu(){
        headerRow.innerHTML = '<h2 class="text-light">Quiz-Master 2000</h2>'
        gameField.innerHTML = '<div class="row text-center mt-5"> <div class="col-12"> <div class="jumbotron"> <p>Once you press the start button questions will begin to appear </br></br> Try to correctly question as many questions as possible! Each correctfully questioned question grants 10 points! <br><br> Good luck!</p></div> </div> <div class = "col-12"> <button id="start-button2" class="btn btn-success btn-lg">Start the Quiz!</button> </div> </div>'

        const startButton2 = document.getElementById('start-button2')

        startButton2.onclick = () =>{
            this.PrintQuestion();
        }
    }

    PrintQuestion(){
        
        this.ClearGame();

            let questionRow = document.createElement('div');
            questionRow.className = 'row text-center mt-3';
            let questionCol = document.createElement('div');
            questionCol.className = 'col-12';
            let question = document.createElement('h3');
            question.className = 'question-text';
            question.innerHTML = this.questions[0,0];
            questionRow.appendChild(questionCol);
            questionCol.appendChild(question);
            gameField.appendChild(questionRow);
            
        for (let i = 2; i < this.questions[1].length; i++) {   
            
            if(this.questions[i]!==undefined){
            let answerRow = document.createElement('div');
            answerRow.className = 'row text-center';
            let answerCol = document.createElement('div');
            answerCol.className = 'col-12';
            let answer = document.createElement('button')
            answer.className = 'btn btn-success w-100 mt-3 p-3 answer-button';
            answer.innerHTML = this.questions[1,i];
            answerRow.appendChild(answerCol);
            answerCol.appendChild(answer);
            gameField.appendChild(answerRow);

            answer.onclick = () => {
                if(answer.innerHTML == this.questions[i,1]){
                    this.score+=10;
                }
                this.ClearGame();
                this.PrintQuestion();
                this.PrintScore();
              }
            }
        }
    }

    PrintScore(){
        let scoreText = document.createElement('b');
        scoreText.className = 'score-text';
        scoreText.innerHTML = this.score;
        let scoreRow = document.createElement('div');
        scoreRow.className = 'row text-center';
        let scoreCol = document.createElement('div');
        scoreCol.className = 'col-12';
        scoreRow.appendChild(scoreCol);
        scoreCol.appendChild(scoreText);
        gameField.appendChild(scoreRow);
    }
}

function GetQuestions(){
    let questionList = ['Sveriges Huvudstad?','Stockholm', 'Uppsala', 'Vänersborg', 'Brålanda','Stockholm']['Kennys Efternamn?','Stockholm', 'Uppsala', 'Vänersborg', 'Brålanda','Stockholm']; 
    return questionList;
}

const startButton = document.getElementById('start-button');
const startButton2 = document.getElementById('start-button2');

startButton.onclick = () =>{
    let game = new Game();
    game.ClearGame();
    game.PrintMenu();
}






