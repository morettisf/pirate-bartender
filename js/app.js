var drink = {}
var qNum = 0
var randomNum = Math.floor((Math.random() * 3))

// defining questions constructor
var questionAnswers = function(question, answers) {
	this.question = question
	this.answers = answers
}

// filling questions / answers
var q1 = new questionAnswers('How do ye take yer drinks?', ['Strong', 'Medium', 'Weak'])
var q2 = new questionAnswers('Do ye like it with a salty tang?', ['Aye', 'Nar'])
var q3 = new questionAnswers('Are ye a lubber who likes it bitter?', ['Aye', 'Nar'])
var q4 = new questionAnswers('Would ye like a bit of sweetness with yer poison?', ['Aye', 'Nar'])
var q5 = new questionAnswers('Are ye one for a fruity finish?', ['Aye', 'Nar'])


// defining pantry constructor
var pantryItem = function(category, ingredients) {
	this.category = category
	this.ingredients = ingredients
}

// filling pantry
var alcoholStrong = new pantryItem('strong', ['3 shots rum', '3 shots whisky', '3 shots gin'])
var alcoholMedium = new pantryItem('medium', ['2 shots rum', '2 shots whisky', '2 shots gin'])
var alcoholWeak = new pantryItem('weak', ['1 shots rum', '1 shots whisky', '1 shots gin'])
var salty = new pantryItem('salty', ['Olive on a stick', 'Salt-dusted rim', 'Rasher of bacon'])
var bitter = new pantryItem('bitter', ['Shake of bitters', 'Splash of tonic', 'Twist of lemon peel'])
var sweet = new pantryItem('sweet', ['Sugar cube', 'Spoonful of honey', 'Splash of cola'])
var fruity = new pantryItem('fruity', ['Slice of orange', 'Dash of cassis', 'Cherry on top'])


$(document).ready(function() {
	runQuiz()
})


function runQuiz() {
	
	var questionRotation = [q1, q2, q3, q4, q5]
	var bartender = new asking(qNum)

	// asking constructer to display questions and answers
	function asking(ques) {
		this.ques = ques
		$('#question').html('<h2>' + questionRotation[ques].question + '</h2>')
		$('#answers').html('<ul></ul>')

		questionRotation[ques].answers.forEach(function(answer) {
			$('#answers ul').append('<li>' + answer + '</li>')
		})

		$('#answers li').click('li', function() {
			var selected = $(this).text()
//			bartender.protos[ques](selected)
//			console.log(bartender.protos[ques](selected))
//			var protos = ['alcohol', 'salty', 'bitter', 'sweet', 'fruity']
			switch(ques) {
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

	asking.prototype.alcohol = function(selected) {

		if (selected === 'Strong') {
			drink.alcohol = alcoholStrong.ingredients[randomNum]
		}

		else if (selected === 'Medium') {
			drink.alcohol = alcoholMedium.ingredients[randomNum]
		}

		else {
			drink.alcohol = alcoholWeak.ingredients[randomNum]
		}

		qNum++
		runQuiz()
	}


	asking.prototype.salty = function(selected) {

		if (selected === 'Aye') {
			drink.salty = salty.ingredients[randomNum]
		}

		qNum++
		runQuiz()
	}

	asking.prototype.bitter = function(selected) {

		if (selected === 'Aye') {
			drink.bitter = bitter.ingredients[randomNum]
		}

		qNum++
		runQuiz()
	}

	asking.prototype.sweet = function(selected) {

		if (selected === 'Aye') {
			drink.sweet = sweet.ingredients[randomNum]
		}

		qNum++
		runQuiz()
	}

	asking.prototype.fruity = function(selected) {

		if (selected === 'Aye') {
			drink.fruity = fruity.ingredients[randomNum]
		}

		runResult()
	}

	console.log(drink)
}

function runResult() {
	$('main').html('')
	var recipe = Object.values(drink)
	$('main').append("<h2>Here's what be in thar drink...</h2>")
	recipe.forEach(function(ing) {
		$('main').append('<h3>' + ing + '</h3>')
	})
}














