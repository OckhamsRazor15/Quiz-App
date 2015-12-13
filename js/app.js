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
  	{question: "What car do you drive?", answer1: "BMW", answer2: "Mercedes", answer3: "Camry", correctAnswer: "Mercedes", feedback: "How much is the lease?"}, 
  	{question: "Are you a good person?", answer1: "Yes", answer2: "No", answer3: "Ask my friends", correctAnswer: "Ask my friends", feedback: "Honorable answer."},
  	{question: "What is the correct contraction for 'he is'?", answer1: "his", answer2: "he's", answer3: "contraction vor@na?",correctAnswer: "he's", feedback: "his such a good guy!"},
  	{question: "How old were you when you were young?", answer1: "8", answer2: "17", answer3: "Older than you apeh", correctAnswer:"Older than you apeh", feedback: "well, look at you."},
  	{question: "What type of shoes must you be wearing for a rabiz kick?", answer1: "tsitsaks", answer2: "adidas", answer3: "crocs", correctAnswer: "tsitsaks", feedback: "vay ko" }];

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
				$("#score").text(questions[counter].feedback);
				count++;
				counter++;
				$("#count").text(count);
				nextQuestion();
			}else {
				counter++;
				$("#score").text("Maybe next time..");
				nextQuestion();
			}

			//console.log(counter == questions.length);
 	});
  	function nextQuestion(){
  			if (counter >= questions.length) {
            	$("#feedback").text("Refresh the page to play again");
            	$("#answerList").html("<h2>All finished! See score below!</h2>");
       	 	}else {
          		$("#feedback").text(questions[counter].question);
          		$("#answerList").html("<li>" + questions[counter].answer1 + "</li><br />" + "<li>" + questions[counter].answer2 + "</li><br/>" + "<li>" + questions[counter].answer3 + "</li><br/>");
      		}    
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






