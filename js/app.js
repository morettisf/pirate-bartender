var drink = {}

var protos = ['alcohol', 'salty', 'bitter', 'sweet', 'fruity']

var questionsList = [

	{ question : 'How do ye like yer drinks?',
	answers : 
	{ option1 : 'Strong', 
	option2 : 'Medium', 
	option3 : 'Weak' }
	},

	{ question : 'Do ye like it with a salty tang?',
	answers :
	{ option1 : 'Yes',
	option2 : 'No' }
	},

	{ question : 'Are ye a lubber who likes it bitter?',
	answers :
	{ option1 : 'Yes',
	option2 : 'No' }
	},

	{ question : 'Would ye like a bit of sweetness with yer poison?',
	answers :
	{ option1 : 'Yes',
	option2 : 'No' }
	},

	{ question : 'Are ye one for a fruity finish?',
	answers :
	{ option1 : 'Yes',
	option2 : 'No' }
	}
]

var pantry = [

	{ alcohol : {
		strong : [
			{ ingredient : '3 shots rum' }, 
			{ ingredient : '3 shots whisky' }, 
			{ ingredient : '3 shots gin' } 
			],
		medium : [
			{ ingredient : '2 shots rum' }, 
			{ ingredient : '2 shots whisky' }, 
			{ ingredient : '2 shots gin' } 
			],
		weak : [
			{ ingredient : '1 shot rum' }, 
			{ ingredient : '1 shot whisky' }, 
			{ ingredient : '1 shot gin' }
			]
		}
	},

	{ salty : [
		{ ingredient : 'Olive on a stick' }, 
		{ ingredient : 'Salt-dusted rim' }, 
		{ ingredient : 'Rasher of bacon' }
		]
	},

	{ bitter : [
		{ ingredient : 'Shake of bitters' }, 
		{ ingredient : 'Splash of tonic' }, 
		{ ingredient : 'Twist of lemon peel' }
		]
	},

	{ sweet : [
		{ ingredient : 'Sugar cube' }, 
		{ ingredient : 'Spoonful of honey' }, 
		{ ingredient : 'Splash of cola' }
		]
	},

	{ fruity : [
		[ { ingredient1 : 'Slice of orange' }, 
		{ ingredient2 : 'Dash of cassis' }, 
		{ ingredient3 : 'Cherry on top' } ]
		]
	}
	
]

$(document).ready(function() {
	runQuiz()
})

var qNum = 0
var q
var randomNum = Math.floor((Math.random() * 3) + 0)
var alcoholIng = ''
var saltyIng = ''
var bitterIng = ''
var sweetIng = ''
var fruityIng = ''

function runQuiz() {

	q = new asking(qNum)


	function asking(ques) {
		this.ques = ques
		$('#question').html('<h2>' + questionsList[ques].question + '</h2>')

		$('#answers').html('<ul></ul>')
		for (var key in questionsList[ques].answers) {
			$('#answers ul').append('<li>' + questionsList[ques].answers[key] + '</li>')
		}

		$('#answers li').click('li', function() {
			var selected = $(this).text()
//			q.protos[ques](selected)
//			console.log(q.protos[ques](selected))

			switch(ques) {
				case 0 :
				q.alcohol(selected)
				break
				case 1 :
				q.salty(selected)
				break
				case 2 :
				q.bitter(selected)
				break
				case 3 :
				q.sweet(selected)
				break
				case 4 :
				q.fruity(selected)
				break
			}
		})

	}

	asking.prototype.alcohol = function(selected) {

		if (selected === 'Strong') {
			alcoholIng = pantry[0].alcohol.strong[randomNum].ingredient
			drink.alcohol = alcoholIng
	//		drink.push()
		}

		else if (selected === 'Medium') {
			alcoholIng = pantry[0].alcohol.medium[randomNum].ingredient
			drink.alcohol = alcoholIng
		}

		else {
			alcoholIng = pantry[0].alcohol.weak[randomNum].ingredient
			drink.alcohol = alcoholIng
		}

		qNum++
		runQuiz()
	}


	asking.prototype.salty = function(selected) {

		if (selected === 'Yes') {
			saltyIng = pantry[1].salty[randomNum].ingredient
			drink.salty = saltyIng
		}

		qNum++
		runQuiz()
	}

	asking.prototype.bitter = function(selected) {
		if (selected === 'Yes') {
			bitterIng = pantry[2].bitter[randomNum].ingredient
			drink.bitter = bitterIng
		}

		qNum++
		runQuiz()
	}

	asking.prototype.sweet = function(selected) {
		if (selected === 'Yes') {
			sweetIng = pantry[3].sweet[randomNum].ingredient
			drink.sweet = sweetIng
		}

		qNum++
		runQuiz()
	}

	asking.prototype.fruity = function(selected) {
		if (selected === 'Yes') {
			fruityIng = pantry[4].fruity[randomNum].ingredient
			drink.fruity = fruityIng
		}

		runResult()
	}

	console.log(drink)

}

function runResult() {
	$('body').html('')
	var recipe = Object.values(drink)
	recipe.forEach(function(ing) {
		$('body').append('<h2>' + ing + '</h2>')
	})
}














