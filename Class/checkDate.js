function dateCheck(month, year) {
	let date = new Date();
	let curMonth = date.getMonth();
	let curYear = date.getFullYear();

	let testMonths = year * 12 + month;
	let curMonths = curYear * 12 + curMonth;

	curMonths = (curMonths - testMonths) / 12;

	console.log(curMonths.toFixed(2));
}

dateCheck(4, 2015);
