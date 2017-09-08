
//generic date functions
function getDay(date){
	var d = parseInt(date.slice(0,2));
	return d;
}

function getMonth(date){
	var m = parseInt(date.slice(3,5));
	return m;
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

///----------------------
function emptyDays(daysToDisplay){
	var blanks = 0;
	if(daysToDisplay>1){
		for (var i = 1; i < daysToDisplay; i++) {
			document.write('<td class="blank" '+i+'></td>');
			if(i%7==0){
				document.write("<tr />");
				document.write("<tr>");
			}
			blanks+=1;
		}
	}
	return blanks;
}

function generateDays(initialDay,totalDaysMonth,days,pos){
var totalDays = days;
	var blanks = emptyDays(pos);
	var finalDay;
	
	for (var i = pos; i <= totalDaysMonth; i++) {
		if(totalDays>0){
			if ((i%7)==0 | (i%7)==1){
				document.write('<td class="weekend" >'+initialDay+'</td>');
			}
			else{
				document.write('<td class="day" >'+initialDay+'</td>');
			}
			if(i%7==0){
				document.write("<tr />");
				document.write("<tr>");
			}
		}
		totalDays-=1;
		finalDay = i%7;
		initialDay+=1;
		console.log('booyaah!!'+finalDay+i)
	}
	console.log('booyaah!!'+finalDay)
	if(finalDay>0){
		fillBlanks(6-finalDay);
	}

	return finalDay+1;
}
function fillBlanks(totalDays){
	var days = Math.abs(totalDays+1);
	var blanks = 7-(days%7);

	for (var i = 1; i <= days; i++) {
		document.write('<td class="blank" ></td>');
		if(i%7==0){
			document.write("<tr/>");
		}
	}
}

function createMonthGrid(day,totalDaysMonth,daysToDisplay,year,monthLiteral,pos){
	var pos = pos;
	document.write('<table class="calendar"><thead><td>S</td><td>M</td><td>T</td><td>W</td><td>T</td><td>F</td><td>S</td></thead>');
	document.write('<tbody><tr class="header"> <td colspan=7>'+monthLiteral.concat(' '+ year +'</td> </tr>'));
	pos = generateDays(day,totalDaysMonth,daysToDisplay,pos);
	document.write('</tbody></table>');

	return pos;	
}

function generateMonths(day,month, year, daysToDisplay,pos){
	var totalDaysMonth = whatMonth(month).days;
	var monthLiteral = whatMonth(month).name;
	var totalMonths = (daysToDisplay*12)/365;
	var pos = day;


	document.write(daysToDisplay+' Days Example');

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

function Calendar(date,daysToDisplay){
	var day = getDay(date);
	var month = getMonth(date);
	var year = getYear(date);
	
	generateMonths(day,month, year, daysToDisplay);
}


///--------------------------------------------
Calendar("18/02/2088",45);
