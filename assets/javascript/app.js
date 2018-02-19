var count = 30;

var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;
var clockRunning = false;

$(document).ready(function () {

	$("#duringGame").hide();
	$("#endGame").hide();


	$("#startButton").on("click", function () {

		$("#starting").hide();

		$("#duringGame").show();

		startCountdown();
		return;
	});

	$("#restartButton").on("click", function () {

		correctCount = 0;
		wrongCount = 0;
		unansweredCount = 0;
		$("#starting").show();

		$("#endGame").hide();


		count = 30;
		return;
	})


	function countDown() {
		count--;
		$('#timeLeft').html(count + " Seconds");

		$("#finishButton").on("click", function () {
			count = 0;
			return;
		});

		if (count == -1) {

			timesUp();

			$("#duringGame").hide();
		}
	}

	function startCountdown() {
		// creates the countdown and sets it to 1 second
		intervalId = setInterval(countDown, 1000);
	}

	function timesUp() {
		// The :checked selector works for checkboxes, radio buttons, and options of select elements ---- api.jquery.com/val/
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