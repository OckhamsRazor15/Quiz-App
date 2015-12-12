$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var questions = [
  	{question: "Question 1?", answer1: "answer 1", answer2: "answer 2", answer3: "answer 3", correctAnswer: "answer 1", feedback: "Great Answer!"}, 
  	{question: "question 2?", answer1: "d", answer2: "yes", correctAnswer: "d", feedback: "Great Answer!"},
  	{question: "question 3?", answer1: "d", answer2: "yes", correctAnswer: "d", feedback: "Great Answer!"}];

  	$("#startButton").click(function(e){
  		e.preventDefault();
  		$(this).hide();
  		nextQuestion();
  		//$("button.button").show();
  	});
  	
  	/*$("button.button").click(function(e){
  		e.preventDefault();
  		nextQuestion();
  	});*/
  	
	var count = 0;
  	var counter = 0;
  	$("#answerList").on("click", "li", function(){
		if ($(this).text() == questions[counter].correctAnswer){
			if(counter < questions.length){
			$("#score").text(questions[counter].feedback);
			counter = (counter + 1) % questions.length;
			count++;
			nextQuestion();
			}else if (counter == questions.length - 1) {
				$("#answerList").html("<h2>All finished!</h2>");
			}
			}else {
				$("#score").text("Maybe next time..");
			}
			console.log(counter == questions.length - 1);
 	});
  	function nextQuestion(){
  			$("#feedback").text(questions[counter].question);
  			$("#answerList").html("<li>" + questions[counter].answer1 + "</li><br />" + "<li>" + questions[counter].answer2 + "</li><br/>" + "<li>" + questions[counter].answer3 + "</li><br/>");
  			$("#count").text(count);
  }
  	
	//display question first - check
	//create another variable and repopulate with next variable
	//guessing correct answer
		//how does success work?
  	
  	//Constructor Function for Question
  	/*function Question(question, answers, correctAnswer){
  		console.log(question1);
  		this.question = question;
  		this.answers = answers;
  		this.correctAnswer = correctAnswer;


  	}
*/
  });

/*
$('#question-holder').html('<h3>' + questions[counter].question + '<h3>');
$('#ans0').html(questions[counter].option1);
$('#ans1').html(questions[counter].option2);
$('#ans2').html(questions[counter].option3);
$('#ans3').html(questions[counter].option4);*/






