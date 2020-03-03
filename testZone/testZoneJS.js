'use strict'

function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.add("text-typing2");
  element.display = 'inline-block';
}
setTimeout(myFunction, 2000);

//TEST CODE HERE
// don't change this code

let  money = prompt('Ваш бюджет на месяц?', 1500),
		 time = prompt('Дата в формате YYYY-MM-DD','2021-02-05'),
		 answer1 = prompt('Введите обязательную статью расходов в этом месяце', "Еда"),
		 answer2 = prompt('Во сколько обойдется?', 150),
		 appData = {
				budget: money,
				timeData: time,
				expenses: {answer1, answer2},
				optionalExpenses: '',
				income: '',
				savings: false
			};
alert('Бюджет на месяц: '+money/30);
