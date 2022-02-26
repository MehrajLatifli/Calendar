var date = new Date();
var month;
var year;
var yearfill;
var monthfill;
var content_year="";
var content_month="";



function fillyear(){


    for (let index = 0; index < 41; index++) {

        yearfill=document.getElementById("yearselect");

        if(index<10)
        {
        content_year+="<option value='200"+index+"'>200"+index+"</option>"
        }
        if(index>=10)
        {
        content_year+="<option value='20"+index+"'>20"+index+"</option>"
        }


        yearfill.innerHTML=content_year;
    }


}


function fillmonth(){





    for (let k = 0; k < 13; k++) {

        monthfill=document.getElementById("monthselect");

        if(k=1)
        {
            content_month+="<option value='January'>January</option>"
        }
        if(k=2)
        {
            content_month+="<option value='February'>February</option>"
        }
        if(k=3)
        {
            content_month+="<option value='March'>March</option>"
        }
        if(k=4)
        {
            content_month+="<option value='April'>April</option>"
        }
        if(k=5)
        {
            content_month+="<option value='May'>May</option>"
        }
        if(k=6)
        {
            content_month+="<option value='June'>June</option>"
        }
        if(k=7)
        {
            content_month+="<option value='July'>July</option>"
        }
        if(k=8)
        {
            content_month+="<option value='August'>August</option>"
        }
        if(k=9)
        {
            content_month+="<option value='September'>September</option>"
        }
        if(k=10)
        {
            content_month+="<option value='October'>October</option>"
        }
        if(k=11)
        {
            content_month+="<option value='November'>November</option>"
        }
        if(k=12)
        {
            content_month+="<option value='December'>December</option>"
        }

  

        monthfill.innerHTML=content_month;
    }
}


function getTime() {

    var now = new Date()
    var hour = now.getHours()
    var minute = now.getMinutes()
    now = null
    var ampm = ""

    if (hour >= 12) {
      hour -= 12
      ampm = "PM"
    } else
      ampm = "AM"
    hour = (hour == 0) ? 12 : hour

    if (minute < 10)
      minute = "0" + minute 
  
    // return time string
    return hour + ":" + minute + " " + ampm
  }
  
  function leapYear(year) {
    if (year % 4 == 0)
      return true 
    
    return false
  }
  
  function getDays(month, year) {
      // create array to hold number of days in each month
      var ar = new Array(12)
      ar[0] = 31 // January
      ar[1] = (leapYear(year)) ? 29 : 28 // February
      ar[2] = 31 // March
      ar[3] = 30 // April
      ar[4] = 31 // May
      ar[5] = 30 // June
      ar[6] = 31 // July
      ar[7] = 31 // August
      ar[8] = 30 // September
      ar[9] = 31 // October
      ar[10] = 30 // November
      ar[11] = 31 // December
    
      // return number of days in the specified month (parameter)
      return ar[month]
    }
    
    function getMonthName(month) {

      var array = new Array(12)
      array[0] = "January"
      array[1] = "February"
      array[2] = "March"
      array[3] = "April"
      array[4] = "May"
      array[5] = "June"
      array[6] = "July"
      array[7] = "August"
      array[8] = "September"
      array[9] = "October"
      array[10] = "November"
      array[11] = "December"
      return array[month]
    }
  
    function setCalendar(now,selectedyear,selectedmonth) {
        var month;
   
   
      var year = selectedyear;
      if (year < 1000)
      {

          year += 1900;
      }

        if(selectedmonth=="January"){
           month=0;
        }
        

        if(selectedmonth=="February"){
            month=1;
        }

        if(selectedmonth=="March"){
            month=2;
        }

        if(selectedmonth=="April"){
            month=3;
        }

        if(selectedmonth=="May"){
            month=4;
        }

        if(selectedmonth=="June"){
            month=5;
        }

        if(selectedmonth=="July"){
            month=6;
        }

        if(selectedmonth=="August"){
            month=7;
        }

        if(selectedmonth=="September"){
            month=8;
        }

        if(selectedmonth=="October"){
            month=9;
        }

        if(selectedmonth=="November"){
            month=10;
        }

        if(selectedmonth=="December"){
            month=11;
        }

        

      var monthName = getMonthName(month)
      var date = now.getDate()
      now = null
    

      var firstDayInstance = new Date(year, month, 1)
      var firstDay = firstDayInstance.getDay()
      firstDayInstance = null
    

      var days = getDays(month, year)
    

      drawCal(firstDay + 1, days, date, monthName, year)
      }
   
      
    
     
      
  
    function drawCal(firstDay, lastDate, date, monthName, year) {
  
      var d= document.getElementById("t");
  
      
      var headerHeight = 50 
      var border = 2 
      var cellspacing = 4 
      var headerColor = "midnightblue" 
      var headerSize = "+3" 
      var colWidth = 60 
      var dayCellHeight = 25 
      var dayColor = "red"
      var cellHeight = 40 
      var todayColor = "red" 
      var timeColor = "purple" 
    
    
      var text = ""
      text += '<div id="table">'
      text += '<table BORDER=' + border + ' CELLSPACING=' + cellspacing + '>' 
      text += '<th COLSPAN=7 HEIGHT=' + headerHeight + '>' 
      text += '<FONT COLOR="purple"' + headerColor + '" SIZE=' + headerSize + '>' 
      text += monthName + ' ' + year + ' ' + getTime()
      text += '</FONT>' 
      text += '</th>' 
    

      var openCol = '<td WIDTH=' + colWidth + ' HEIGHT=' + dayCellHeight + '>'
      openCol += '<FONT COLOR="' + dayColor + '">'
      var closeCol = '</FONT></td>'
    
     
      var weekDay = new Array(7)
      weekDay[0] = "Sun"
      weekDay[1] = "Mon"
      weekDay[2] = "Tues"
      weekDay[3] = "Wed"
      weekDay[4] = "Thu"
      weekDay[5] = "Fri"
      weekDay[6] = "Sat"
    
      
      text += '<tr ALIGN="center" VALIGN="center">'
      for (var dayNum = 0; dayNum < 7; ++dayNum) {
        text += openCol + weekDay[dayNum] + closeCol
      }
      text += '</tr>'
    
     
      var digit = 1
      var curCell = 1
    
      for (var row = 1; row <= Math.ceil((lastDate + firstDay - 1) / 7); ++row) {
        text += '<tr ALIGN="center" VALIGN="top">'
        for (var col = 1; col <= 7; ++col) {
          if (digit > lastDate)
            break
          if (curCell < firstDay) {
            text += '<td></td>';
            curCell++
          } else {
            // if (digit == date) { 
            //   text += '<TD HEIGHT=' + cellHeight + '>'
            //   text += '<FONT COLOR="' + todayColor + '">'
            //   text += digit
            //   text += '</FONT><BR>'
            //   text += '<FONT COLOR="' + timeColor + '" SIZE=2>'
            
            //   text += '</FONT>'
            //   text += '</TD>'
            // } else
              text += '<td id="v" HEIGHT=' + cellHeight + '>' + digit + '</td>'
            digit++
          }
        }
        text += '</tr>'
      }
    
     
      
      text += '</table>'
      text += '</div>'
      
      
      
      
      
      
      d.innerHTML=text;
      
    
      var value;

      const time = new Date();

      var t = document.getElementById("table");
      var trs = t.getElementsByTagName("tr");
      var tds = null;

      for (var i=0; i<trs.length; i++)
      {
        tds = trs[i].getElementsByTagName("td");
        for (var n=0; n<tds.length;n++)
        {


          document.cookie="you select= ; expires=Thu, 1 Feb 1999 00:00:01 GMT;";

          tds[n].onclick=function() { alert( document.cookie="you select="+this.innerHTML+ " Month: "+ monthName+" expires="+ year); }

       
        }
      }



      
     




    }


var getDate ;
var getDay;

function generate_date(){




    var monthselect = document.getElementById("monthselect");

    var selectedmonth = monthselect.options[monthselect.selectedIndex].text;



    var yearselect = document.getElementById("yearselect");

    var selectedyear = yearselect.options[yearselect.selectedIndex].text;
 




    setCalendar(date, selectedyear , selectedmonth);






}

window.onload = function main()
{
    fillyear();

    fillmonth();

    if(document.cookie!=null)
    {

      alert(document.cookie);
    }
  

}