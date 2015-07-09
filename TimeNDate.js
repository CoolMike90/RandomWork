var d = new Date();
var weekday = new Array(7);
var tod = "";
var hour = d.getHours();
var min = d.getMinutes();


weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

if (hour < 12)
   {
   tod = "AM";
   }
else
   {
   tod = "PM";
   }
if (hour === 0)
   {
   hour = 12;
   }
if (hour > 12)
   {
   hour = hour - 12;
   }
var n = weekday[d.getDay()];

console.log("Today is: " + n);
console.log("The Time is: " + hour + " : " + min + " " + tod);
