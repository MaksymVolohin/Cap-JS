$(function(){
    var date1 = new Date(2017, 6 , 1);

    var currentDate = new Date();

    var justListenDate = new Date();

    var test = date1.toLocaleString('en', {weekday: 'short'})
    var month = currentDate.toLocaleString('en', {month: 'long'});
  
    var day = currentDate.toLocaleString('en', {weekday: 'short'});

    // function someDateValue(date, param){
    //     date.toLocaleString('en', {param: 'short'});
    // }
    var settedDay = 1;
    var dayInMonth = 0;
    var createdDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), settedDay);
  //  console.log(createdDate);
  //  console.log(createdDate.toLocaleString('en', {weekday: 'short'}));
    var firstDayOfMonth = createdDate.toLocaleString('en', {weekday: 'short'});
 //   console.log(test);
 //   console.log(day);


    var weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
   // var date2 = new Date();
   // console.log(date2);
  //  console.log(weekDays);
  //  console.log(weekDays[5]==test);

    var tableContainer = $('.calendar');
    var tableBuild = '';

    tableBuild = tableBuild + '<table><th colspan="7">' + month + ' ' + justListenDate.getFullYear() + '</th>';
  //  console.log(tableBuild);

    // -------------------- Missing TD's----------------------------------------------------------------------

    var dayIter = 0;
    var tdIter = 1;
    var tableBuildNose = '';
    for(i = 0; i < weekDays.length; i++){
        if(firstDayOfMonth == weekDays[i]){
            dayIter = i;
         //   console.log(dayIter);
            tableBuildNose = tableBuildNose + '<tr>'
            for(j = 0; j < dayIter; j++){
                tableBuildNose = tableBuildNose + '<td class="td-unhovered">' + ' ' + '</td>';
        //        console.log(j);
                tdIter++;
             //   console.log('td iter = ' + tdIter);
            }
           // tableBuild = tableBuild + '<td colspan="' + (tdIter -1) + '" class="td-unhovered">' + ' ' + '</td>'
       //     console.log('dayIter: ' + dayIter);
        }
     //   tableBuild = tableBuild + '<td>' + createdDate.getDay() + '</td>';
     //   settedDay++;
    }
 //   console.log(tableBuild);


    var diff =  0 ;

    //------------------------Days In Month ----------------------------------------------------
    for(i = 1; i <= 33; i++){
        createdDate.setDate(settedDay);
        diff = settedDay - createdDate.getDate();
        if(diff > 0){
            dayInMonth = settedDay - 1;
            break;
        }
        settedDay++;
    }
 //   console.log(createdDate + dayInMonth + ' ' + diff);
//


    // --------------------- I dont know how to name it, so i left it like this ----------------
// ------------------Mb in future i will rename this block... mb------------------------
  // ------------------------ TABLE BUILD TD -------------------------------------------------------------------------

    createdDate = currentDate;
    var dayCounter = 1;

    var setDate = 0;

    var tableBuildTD = '';
    for(i = 0; i < dayInMonth; i++){
        setDate = i + 1;
        if(tdIter == 0){
            tableBuildTD = tableBuildTD + '<tr>';
        } else {
            createdDate.setDate(setDate);
             if(createdDate.getDate()==justListenDate.getDate() & createdDate.getMonth() == justListenDate.getMonth() & createdDate.getFullYear() == justListenDate.getFullYear()){
                 tableBuildTD = tableBuildTD + '<td id="today">' + ' ' + dayCounter + ' ' + '</td>';
             } else{
                 tableBuildTD = tableBuildTD + '<td id="td-cont">' + ' ' + dayCounter + ' ' + '</td>';
             }
            dayCounter++;
            tdIter++;
            if(tdIter > 7){
                tableBuildTD = tableBuildTD + '</tr>';
                tdIter = 1;
            }
            //console.log(createdDate.getDate());
           // console.log();
            //console.log(justListenDate.getDate());

        }

        // if(createdDate.getDate() == currentDate.getDate()){
        //     console.log(createdDate);
        //     console.log(currentDate);
        //     tableBuildTD = tableBuildTD + '<td id="today">' + ' ' + dayCounter + ' ' + '</td>';
        // }



    }

    // --------------------------- TbleBuild Tale -------------------------------------------

    createdDate = currentDate;
    createdDate.setDate(dayInMonth);
    var lastDayOfMonth = createdDate.toLocaleString('en', {weekday: 'short'});
    var tableBuildTale = '';
    var lastDayCount = 0;
    var tdTaleEmptyIter = 0;
    for(i = 0; i < weekDays.length; i++){
        tdTaleEmptyIter++;
        dayIter = i;
        if(lastDayOfMonth == weekDays[i]){
          //  console.log('First - ' + dayIter);
           // dayIter = i + 1;
            lastDayCount = (weekDays.length - dayIter) - 1;
          //  console.log(lastDayCount);
        //    console.log('Second - ' + lastDayCount);
            for(j = 0; j < lastDayCount; j++){
                tableBuildTale = tableBuildTale + '<td class="td-unhovered">' + ' ' + '</td>';
            }
        }
    }

    tableBuild = tableBuild + tableBuildNose + tableBuildTD + tableBuildTale;
    tableContainer.html(tableBuild);
 //   console.log(currentDate.toLocaleString('en', {weekday: 'short'}));

  //  console.log(justListenDate.getDate());


    var tdText = $('#td-cont');
    var tdCont = ' ' + justListenDate.getDate() + ' ';

    for(i = 0; i < 32; i++){
       // if(){}

    }
    $('td:contains("tdCont")').css( "text-decoration", "underline" );
  //  console.log(tdCont);


})