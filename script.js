//your JS code here. If required.
function daysOfYear(year){
	if(year%4 === 0){
		if(year % 100 === 0){
			return year % 400 === 0 ? 366 :365;
		}
		return 365;
	}
	return 365;
}
