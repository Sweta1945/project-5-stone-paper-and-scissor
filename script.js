//task1: doing for to message to come up when clicked on "RULES" button

let flag=false;//ie, rn pop up is hiddden
let hiddenDivision=document.querySelector('#hiddenDivision');
let compScore=document.querySelector('#computer_score_js');
let yourScore=document.querySelector('#myscore_js');

let paper=document.querySelector('.paper');
let scissor=document.querySelector('.scissor');
let stone=document.querySelector('.stone');
let computerScore = 0;
let playerScore = 0;

let decision="none";
let footer=document.querySelector('.footer');
let changingDivision=document.querySelector('.footer_main');
let footerWin=document.querySelector('.footer_win');
let userWin=document.querySelector('.waveStyling_user');
let computerWin=document.querySelector('.waveStyling_comp');
let winOrlooseMsg=document.querySelector('.WinOrLoose');
let againstPCMsg=document.querySelector('.againstPC');
let replayButton=document.querySelector('.replayButton');

const storedComputerScore = parseInt(localStorage.getItem('computerScore'));
const storedPlayerScore = parseInt(localStorage.getItem('playerScore'));

if (!isNaN(storedComputerScore)) {
    computerScore = storedComputerScore;
}

if (!isNaN(storedPlayerScore)) {
    playerScore = storedPlayerScore;
}

// Update the displayed scores here
updateScores();

let nextButton=document.querySelector('#nextButton');
ruleButton=document.querySelector('#rules');

ruleButton.addEventListener('click', function(e){
    popUp();
})

function popUp(){
    if(flag===false)
    {
        hiddenDivision.style.display = 'block';
        flag=true;
    }
    else{
        hiddenDivision.style.display= 'none';
        flag=false;
    }
    
}

//task2: making the player and computer select among stone paper and scissor and score them accorfingly

//also changin the user side image and computer side image


paper.addEventListener('click', function(e) {
    play('paper');
})

stone.addEventListener('click', function(e) {
    play('stone');
})

scissor.addEventListener('click', function(e) {
    play('scissor');
})


function play(playerChoice) {
    const choiceImages = {
        'paper': ['paper.png', 'yellow circle.png'],
        'stone': ['stone.png', 'blue circle.png'],
        'scissor': ['scissor.png', 'purple circle.png']
    };

    const choices = Object.keys(choiceImages);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Update user's choice images
    document.querySelector('.userSideLargeIMG').src = choiceImages[playerChoice][1];
    document.querySelector('.userSideSmallIMG').src = choiceImages[playerChoice][0];

    // Update computer's choice images
    document.querySelector('.computerSideLargeIMG').src = choiceImages[computerChoice][1];
    document.querySelector('.computerSideSmallIMG').src = choiceImages[computerChoice][0];

   if(playerChoice==='stone')
   {
    if(computerChoice==='scissor')
    {
       playerScore=playerScore+5;
       decision="win"
    }
    else if(computerChoice==='paper')
    {
        computerScore=computerScore+5;
        decision="lost"
    }
    else{
        playerScore=playerScore+5;
        computerScore=computerScore+5;
        decision="tie"
    }
   }

  else if(playerChoice==='paper')
   {
    if(computerChoice==='stone')
    {
        playerScore=playerScore+5;
        decision="win"
    }
    else if(computerChoice==='scissor')
    {
        computerScore=computerScore+5;
        decision="lost"
    }
    else{
        computerScore=computerScore+5;
        playerScore=playerScore+5;
        decision="tie"
    }
   }

   else
   {
    if(computerChoice==='paper')
    {
          playerScore=playerScore+5;
          decision="win"

    }
    else if(computerChoice==='stone')
    {
        computerScore=computerScore+5;
        decision="lost"
    }
    else
    {
        playerScore=playerScore+5;
        computerScore=computerScore+5;
        decision="tie"
    }
   }


   updateScores();
   
   if(decision==="win")
   {
    win();
   }
   else if(decision==="lost")
   {
   lost();
   }
   else if(decision==="tie"){
    tie();
   }
   else{
    nextButton.style.display='none';
    ruleButton.style.marginLeft='88%'
   }
   
}




function win(){
    footer.style.display='none';
    footerWin.style.display='flex';
    userWin.style.display='block'; 
    computerWin.style.display='none';
    winOrlooseMsg.style.display='block';
    winOrlooseMsg.textContent='YOU WIN'
    againstPCMsg.style.display='block';
    replayButton.style.display='block';
    ruleButton.style.marginLeft='77%'
    nextButton.style.display='block';

    
}


function lost(){
    footer.style.display='none';
    footerWin.style.display='flex';
    userWin.style.display='none';
    computerWin.style.display='flex'
    winOrlooseMsg.style.display='block';
    winOrlooseMsg.textContent='YOU LOST'
    againstPCMsg.style.display='block';
    replayButton.style.display='block';
    ruleButton.style.marginLeft='88%'
    nextButton.style.display='none';

}


function tie(){
    footer.style.display='none';
    footerWin.style.display='flex';
    userWin.style.display='none';
    computerWin.style.display='none'
    winOrlooseMsg.style.display='block';
    winOrlooseMsg.textContent='TIE UP'
    againstPCMsg.style.display='block';
    replayButton.style.display='block';
    ruleButton.style.marginLeft='88%'
    nextButton.style.display='none';

}
replayButton.addEventListener('click', function(e) {
   resetScores();
    footer.style.display='block';
    nextButton.style.display='none';
    footerWin.style.display='none';
    ruleButton.style.marginLeft='88%'

})

function resetScores() {
    computerScore = 0;
    playerScore = 0;
    updateScores();
    localStorage.setItem('computerScore', computerScore);
    localStorage.setItem('playerScore', playerScore);
}

//task3: updating score in the divison made for score to display
function updateScores()
{
    compScore.textContent=computerScore;
    yourScore.textContent=playerScore;
    localStorage.setItem('computerScore', computerScore);
    localStorage.setItem('playerScore', playerScore);
}

nextButton.addEventListener('click', function(e) {
    window.location.href = 'winPage.html'; 
});


