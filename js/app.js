var drink = {}
var qNum = 0


// defining questions constructor
var QuestionAnswers = function(question, answers) {
	this.question = question
	this.answers = answers
}

// filling questions / answers
var q1 = new QuestionAnswers('How do ye take yer drinks?', ['Strong', 'Medium', 'Weak'])
var q2 = new QuestionAnswers('Do ye like it with a salty tang?', ['Aye', 'Nar'])
var q3 = new QuestionAnswers('Are ye a lubber who likes it bitter?', ['Aye', 'Nar'])
var q4 = new QuestionAnswers('Would ye like a bit of sweetness with yer poison?', ['Aye', 'Nar'])
var q5 = new QuestionAnswers('Are ye one for a fruity finish?', ['Aye', 'Nar'])


// defining pantry constructor
var PantryItem = function(category, ingredients) {
	this.category = category
	this.ingredients = ingredients
}

// filling pantry
var alcoholStrong = new PantryItem('strong', ['3 shots rum', '3 shots whisky', '3 shots gin'])
var alcoholMedium = new PantryItem('medium', ['2 shots rum', '2 shots whisky', '2 shots gin'])
var alcoholWeak = new PantryItem('weak', ['1 shots rum', '1 shots whisky', '1 shots gin'])
var salty = new PantryItem('salty', ['Olive on a stick', 'Salt-dusted rim', 'Rasher of bacon'])
var bitter = new PantryItem('bitter', ['Shake of bitters', 'Splash of tonic', 'Twist of lemon peel'])
var sweet = new PantryItem('sweet', ['Sugar cube', 'Spoonful of honey', 'Splash of cola'])
var fruity = new PantryItem('fruity', ['Slice of orange', 'Dash of cassis', 'Cherry on top'])


$(document).ready(function() {
	runQuiz()
})

// defining construction function for asking and displaying questions
function Asking(ques) {
	this.ques = ques
}

var questionRotation = [q1, q2, q3, q4, q5]

function runQuiz() {

	var bartender = new Asking(qNum)
	
	$('#question').html('<h2>' + questionRotation[bartender.ques].question + '</h2>')
	$('#answers').html('<ul></ul>')

	questionRotation[bartender.ques].answers.forEach(function(answer) {
		$('#answers ul').append('<li>' + answer + '</li>')
	})

	$('#answers li').click('li', function() {
		var selected = $(this).text()

		switch(bartender.ques) {
			case 0 :
			bartender.alcohol(selected)
			break
			case 1 :
			bartender.salty(selected)
			break
			case 2 :
			bartender.bitter(selected)
			break
			case 3 :
			bartender.sweet(selected)
			break
			case 4 :
			bartender.fruity(selected)
			break
		}
	})
}


// pick random ingredient from list and return it
function randomIngredient(ing) {
	var num = Math.floor((Math.random() * ing.length))
	return ing[num]
}

// prototypes to build drink object based on selections
Asking.prototype.alcohol = function(selected) {

	if (selected === 'Strong') {
		drink.alcohol = randomIngredient(alcoholStrong.ingredients)
	}

	else if (selected === 'Medium') {
		drink.alcohol = randomIngredient(alcoholMedium.ingredients)
	}

	else {
		drink.alcohol = randomIngredient(alcoholWeak.ingredients)
	}

	qNum++
	runQuiz()
}

Asking.prototype.salty = function(selected) {

	if (selected === 'Aye') {
		drink.salty = randomIngredient(salty.ingredients)
	}

	qNum++
	runQuiz()
}

Asking.prototype.bitter = function(selected) {

	if (selected === 'Aye') {
		drink.bitter = randomIngredient(bitter.ingredients)
	}

	qNum++
	runQuiz()
}

Asking.prototype.sweet = function(selected) {

	if (selected === 'Aye') {
		drink.sweet = randomIngredient(sweet.ingredients)
	}

	qNum++
	runQuiz()
}

Asking.prototype.fruity = function(selected) {

	if (selected === 'Aye') {
		drink.fruity = randomIngredient(fruity.ingredients)
	}

	runResult()
}


function runResult() {
	$('main').html('')
	var recipe = Object.values(drink)
	$('main').append("<h2>Here's what be in thar drink...</h2>")
	recipe.forEach(function(ing) {
		$('main').append('<h3>' + ing + '</h3>')
	})
}