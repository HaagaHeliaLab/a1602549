var getMonthName = function (monthNumber) {
    var monthArray =[["01","02","03","04","05","06","07","08","09","10","11","12"],["January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"]];
    for (var i = 0; i < monthArray[0].length; i++){
        if(monthNumber == monthArray[0][i])
            return monthArray[1][i];
    }
};
var str ="2017-08-16";
var formatDate = function (rawDate) {
    var day = rawDate.substring(8,10);
    var year = rawDate.substring(0,4);
    var month = getMonthName(rawDate.substring(5,7));
    return (day+" "+month+" "+year);
};
console.log(formatDate(str));

var array = [1,2,3];
console.log(array.toString());
console.log([1,2,3].toString());