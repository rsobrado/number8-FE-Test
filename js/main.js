
//generic date functions
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

function Calendar(){
	var date = document.getElementById('date').value;
	var days = document.getElementById('days').value;

	var day = getDay(date);
	var month = getMonth(date);
	var year = getYear(date);

	console.log(month+' '+day+' '+year);
	console.log(days);
}
