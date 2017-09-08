
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

function generateMonths(day,month, year, daysToDisplay,pos){
	var totalDaysMonth = whatMonth(month).days;
	var monthLiteral = whatMonth(month).name;
	var totalMonths = (daysToDisplay*12)/365;
	var pos = day;

	document.getElementById('renderArea').innerHTML = daysToDisplay+' Days Example';

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
