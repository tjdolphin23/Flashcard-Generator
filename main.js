var basicCard = require('./basicCard');
var clozeCard = require('./clozeCard');
var clozeQuestions = require('/questions');
var basicQuestions = require('/questions');
var inquirer = require('inquirer');

function basicCards() {
	for (var i = 0; i < basicQuestions.length; i++) {
		console.log(basicQuestions[i].front);
		console.log(basicQuestions[i].back);
		basicCards();
	};

function clozeCards() {
	for (var i = 0; i < clozeQuestions.length; i++) {
		console.log(clozeQuestions[i].full);
		console.log(clozeQuestions[i].partial);
	}
};

function startGame () {
	inquirer.prompt([
		{
			type: 'input',
			message: 'Type basic to run basic flashcards or cloze to run cloze flashcards',
			name: 'cloze', 'basic',
		}
		])
	.then(function(inquirerResponse) {
	    if (inquirerResponse.input === basic) {
	  		console.log('Starting basic flashcards');
	  		basicCards();
	    }
	    else (inquirerResponse.input === cloze{
	      console.log('Starting cloze flashcards');
	  		clozeCards();
	    }
	  });

};
