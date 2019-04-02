
/*

this functions make question and answer object.
*/
function QuestionAnswer(ques, opt1, opt2, opt3, opt4, correctA, correctA2)

{

    this.ques = ques;
    this.opt1 = opt1;
    this.opt2 = opt2;
    this.opt3 = opt3;
    this.opt4 = opt4;
    this.correct = correctA;
    this.correct2 = correctA2;


}

var checkScoreUpdated = 0;


var quesList = [];

//Pushing the question object in questList array
quesList.push(new QuestionAnswer("Who teaches us PHP?", "Cory", "Kadeem", "Janelle", "Marina", "Kadeem", "Kadeem"));

quesList.push(new QuestionAnswer("Who is the current president of the United States?", "Janelle", "Justin Trudeau", "Donald Trump", "Himank", "Donald Trump", "Donald Trump"));

quesList.push(new QuestionAnswer("What is 2 + 2?", "4", "4.0", "7", "10", 4, 4.0));

var randomIndex;

/* 

    This function puts question and answer options the question in the index.html 
    when the page loads or user press next Question button in the page.

*/
function putQuestion() {

    console.log("hello");

    //Math.random give a number btw 0-1 then we multiply it by list
    //length to get the index.
    randomIndex = Math.floor(Math.random() * quesList.length);


    $(".question").html(quesList[randomIndex].ques);
    $(".option1").html(quesList[randomIndex].opt1);
    $(".option2").html(quesList[randomIndex].opt2);
    $(".option3").html(quesList[randomIndex].opt3);
    $(".option4").html(quesList[randomIndex].opt4);

    $(".gameScreen").fadeIn();

}


$(".answer1").click(checkAnswer1);
$(".answer2").click(checkAnswer2);
$(".answer3").click(checkAnswer3);
$(".answer4").click(checkAnswer4);


/* 

    CheckAnswer 1-4 checks answer cliked by the user
    a function is run depening on which option the user
    picked.

*/

function checkAnswer1() {

    $(".answer1").css("display", "none");

    if ($(".answer1").text() == quesList[randomIndex].correct && $(".answer1").text() == quesList[randomIndex].correct2)

    {
        rightOrWrongAnswer("yes", "1");;
    } else {

        rightOrWrongAnswer("no", "1");
    }

}

function checkAnswer2() {

    $(".answer2").css("display", "none");

    if ($(".answer2").text() == quesList[randomIndex].correct && $(".answer2").text() == quesList[randomIndex].correct2)

    {
        rightOrWrongAnswer("yes", "2");

    } else {

        rightOrWrongAnswer("no", "2");
    }

}

function checkAnswer3() {

    $(".answer3").css("display", "none");

    if ($(".answer3").text() == quesList[randomIndex].correct && $(".answer3").text() == quesList[randomIndex].correct2)

    {
        rightOrWrongAnswer("yes", "3");

    } else {

        rightOrWrongAnswer("no", "3");
    }

}

function checkAnswer4() {

    $(".answer4").css("display", "none");

    if ($(".answer4").text() == quesList[randomIndex].correct && $(".answer4").text() == quesList[randomIndex].correct2)

    {
        rightOrWrongAnswer("yes", "4");

    } else {

        rightOrWrongAnswer("no", "4");
    }

}



/*

    This function checks if the otion pressed by the user is 
    correct or not and depending on the answer, if its right
    the selected box will become green and if its wrong the selected
    option will become red.

*/

function rightOrWrongAnswer(value, whichAnswer) {

    if (value == "yes") {

        $(".or" + whichAnswer).css("display", "block");
        $(".columns").removeClass("restartColumn");
        changeScoreAndLevel(1);


    } else {

        $(".ow" + whichAnswer).css("display", "block");
        $(".columns").removeClass("restartColumn");
        changeScoreAndLevel(0);


    }

}



$(".nextQuestionBtn").click(nextQuestion)



/*

    This functions loads the next question from the quesList
    on the html when user presssd next question button
    
*/
function nextQuestion() {

    checkScoreUpdated = 0;
    $(".answer1").css("display", "block");
    $(".answer2").css("display", "block");
    $(".answer3").css("display", "block");
    $(".answer4").css("display", "block");

    $(".or1").css("display", "none");
    $(".or2").css("display", "none");
    $(".or3").css("display", "none");
    $(".or4").css("display", "none");

    $(".ow1").css("display", "none");
    $(".ow2").css("display", "none");
    $(".ow3").css("display", "none");
    $(".ow4").css("display", "none");

    $(".addClassForJs").addClass("restartColumn");
    quesList.splice(randomIndex, 1);

    console.log($(".lev").html());

    if ($(".lev").html() == "1") {

        console.log($(".lev").html());

        $(".prog1").css("display", "none");
        $(".prog2").css("display", "block");
    }

    if ($(".lev").html() == "2") {

        console.log($(".lev").html());

        $(".prog2").css("display", "none");
        $(".prog3").css("display", "block");
    }

    if ($(".lev").html() == "3") {

        console.log($(".lev").html());

        $(".prog3").css("display", "none");
        $(".prog4").css("display", "block");
    }

    $(".gameScreen").fadeOut();
    checkGameEnd();

    $(".gameScreen").fadeOut("slow");

    setTimeout(function () {

        if ($(".lev").html() != "3") {
            putQuestion();
        }

    }, 700);


}


function changeScoreAndLevel(score) {

    if (checkScoreUpdated == 0) {

        $(".score").html(parseInt($(".score").html()) + score);
        $(".lev").html(parseInt($(".lev").html()) + 1);
        checkScoreUpdated = 1;

    }

}



$(".restartBtn").click(function () {

    $(".container").fadeOut("slow");

    setTimeout(function () {

        location.reload();
    }, 700);
    //$(".container").fadeIn("slow");
});

function checkGameEnd() {

    if ($(".lev").html() == "3") {

        $(".gameScreen").attr("display", "none !important");
        $(".endGame").attr("display", "block !important")
        $(".endGame").fadeIn();
    }




}

$(document).ready(putQuestion)
