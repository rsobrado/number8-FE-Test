
//-----------------------------------------------
//--------- generic date functions --------------
//-----------------------------------------------

function getMonth(date){
	var m = parseInt(date.slice(0,2));
	return m;
}

function getDay(date){
	var d = parseInt(date.slice(3,5));
	return d;
}

function getYear(date){
	var y = parseInt(date.slice(6,10));
	return y;
}

function whatMonth(month){
	switch(month){
		case 01 : return {name : "January", days : 31};
				 break;
		case 02 : return {name : "February", days : 28};
				 break;
		case 03 : return {name : "March", days : 31};
				 break;
		case 04 : return {name : "April", days : 30};
				 break;
		case 05 : return {name : "May", days : 31};
				 break;
		case 06 : return {name : "June", days : 30};
				 break;
		case 07 : return {name : "July", days : 31};
				 break;
		case 08 : return {name : "August", days : 31};
				 break;
		case 09 : return {name : "September", days : 30};
				 break;
		case 10 : return {name : "Octuber", days : 31};
				 break;
		case 11 : return {name : "November", days : 30};
				 break;
		case 12 : return {name : "December", days : 31};
				 break;
	}
}

//-----------------------------------------------
//--------- Render/Display Month functions ------
//-----------------------------------------------
function emptyDays(daysToDisplay){
	var blanks = 0;
	if(daysToDisplay>1){
		for (var i = 1; i < daysToDisplay; i++) {
			document.getElementById('renderArea').innerHTML += '<td class="blank" '+i+'></td>';
			if(i%7==0){
				document.getElementById('renderArea').innerHTML += "<tr />";
				document.getElementById('renderArea').innerHTML += "<tr>";
			}
			blanks+=1;
		}
	}
	return blanks;
}

function fillBlanks(totalDays){
	var days = Math.abs(totalDays+1);
	var blanks = 7-(days%7);

	for (var i = 1; i <= days; i++) {
		document.getElementById('renderArea').innerHTML += '<td class="blank" ></td>';
		if(i%7==0){
			document.getElementById('renderArea').innerHTML += "<tr/>";
		}
	}
}


function createMonthGrid(day,totalDaysMonth,daysToDisplay,year,monthLiteral,pos){
	var pos = pos;
	var table = '</tbody></table>'
	// document.getElementById('renderArea').innerHTML += '<table class="calendar"><thead><td>S</td><td>M</td><td>T</td><td>W</td><td>T</td><td>F</td><td>S</td></thead>';

	document.getElementById('renderArea').innerHTML += '<table class="calendar"><thead><td>S</td><td>M</td><td>T</td><td>W</td><td>T</td><td>F</td><td>S</td></thead><tbody><tr class="header"> <td colspan=7>'+monthLiteral.concat(' '+ year +'</td> </tr>');
	pos = generateDays(day,totalDaysMonth,daysToDisplay,pos);
	document.getElementById('renderArea').innerHTML += table;

	return pos;	
}

function generateMonths(day,month, year, daysToDisplay,pos){
	var totalDaysMonth = whatMonth(month).days;
	var monthLiteral = whatMonth(month).name;
	var totalMonths = (daysToDisplay*12)/365;
	var pos = day;

	document.getElementById('renderArea').innerHTML = daysToDisplay+' Days Example';

	for (var i = totalMonths; i >= 0; i--) {

		pos = createMonthGrid(day,totalDaysMonth,daysToDisplay,year,monthLiteral,pos);
		
		month+=1;
		day = 1;
		
		if(month>12){
			month = 1;
			year += 1;
		}

		totalDaysMonth = whatMonth(month).days+(pos-1);
		monthLiteral = whatMonth(month).name;
	}

}


function generateDays(initialDay,totalDaysMonth,days,pos){
	var totalDays = days;
	var blanks = emptyDays(pos);
	var finalDay;
	console.log(days);
	console.log(pos);
	
	for (var i = pos; i <= totalDaysMonth; i++) {
		if(totalDays>0){
			if ((i%7)==0 | (i%7)==1){
				document.getElementById('renderArea').innerHTML += '<td class="weekend" >'+initialDay+'</td>';
			}
			else{
				document.getElementById('renderArea').innerHTML += '<td class="day" >'+initialDay+'</td>';
			}
			if(i%7==0){
				document.getElementById('renderArea').innerHTML += "<tr />";
				document.getElementById('renderArea').innerHTML += "<tr>";
			}
		}
		totalDays-=1;
		finalDay = i%7;
		initialDay+=1;
	}
	if(finalDay>0){
		fillBlanks(6-finalDay);
	}

	return finalDay+1;
}

function Calendar(){
	var date = document.getElementById('date').value;
	var daysToDisplay = document.getElementById('days').value;

	var day = getDay(date);
	var month = getMonth(date);
	var year = getYear(date);
	// document.getElementById('renderArea').innerHTML = month+' '+day+' '+year;

	generateMonths(day,month, year, daysToDisplay);
}
