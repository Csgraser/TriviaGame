var count = 30;

var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;
var clockRunning = false;

$(document).ready(function () {
	console.log(count);
	$("#duringGame").hide();
	$("#endGame").hide();


	$("#startButton").on("click", function () {

		$("#starting").hide();

		$("#duringGame").show();

		$('input:radio:checked').attr('checked', false);


		startCountdown();

	});

	$("#restartButton").on("click", function () {

		correctCount = 0;
		wrongCount = 0;
		unansweredCount = 0;
		$("#starting").show();

		$("#endGame").hide();


		count = 30;
		$('#timeLeft').html(count + " Seconds");

	})

	$("#finishButton").on("click", function () {
		timesUp();
		$("#duringGame").hide();
	});

	function countDown() {
		count--;
		$('#timeLeft').html(count + " Seconds");


		if (count === 0) {

			timesUp();

			$("#duringGame").hide();
		}
	}

	function startCountdown() {
		// creates the countdown and sets it to 1 second
		intervalId = setInterval(countDown, 1000);
	}

	function timesUp() {
		// This code works by grabbing the input selector from html then finds the radio element. finds the name of that element inside the[] brackets. the checked part is making sure that JS is grabbing only the checked answer and running its value.
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();

		if (Q1 == undefined) {
			unansweredCount++;
		}
		else if (Q1 == "Salt Lake City, Utah") {
			correctCount++;
		}
		else {
			wrongCount++;
		}

		if (Q2 == undefined) {
			unansweredCount++;
		}
		else if (Q2 == "Conqueror's Oath") {
			correctCount++;
		}
		else {
			wrongCount++;
		}

		if (Q3 == undefined) {
			unansweredCount++;
		}
		else if (Q3 == "Leeland Campana") {
			correctCount++;
		}
		else {
			wrongCount++;
		}

		if (Q4 == undefined) {
			unansweredCount++;
		}
		else if (Q4 == "Final Spell") {
			correctCount++;
		}
		else {
			wrongCount++;
		}

		if (Q5 == undefined) {
			unansweredCount++;
		}
		else if (Q5 == "Necropolis") {
			correctCount++;
		}
		else {
			wrongCount++;
		}

		count = 30;
		clearInterval(intervalId);


		$('#correctAnswers').html(correctCount);
		$('#wrongAnswers').html(wrongCount);
		$('#unanswered').html(unansweredCount);

		$("#endGame").show();

	}
})