
// // // /***    VARIABLES    ***/
plannerContainer = $(".container")

// //  /** DISPLAY CURRENT DAY & Time ***/
let currentDayEl = document.querySelector("#currentDay");
currentDayEl.textContent = (moment().format('MMMM Do YYYY, h:mm A'));
console.log(moment().toDate());

// /***   FUNCTIONS START   ****/
function plannerTime() {
  time = moment([i], ["HH"]).format("LT");
  // console.log(time);
  return time
};


/***   CREATE ELEMENTS THAT MAKE THE PLANNER ROWS ****/
let rowEl = "";
for (var i = 8.00; i <= 18.00; i++) {
  // console.log(i)

  //create planner rows & append to the main div container: create the planner time, entry and save columns
  rowEl = $(`<div class="row"></div>`);
  plannerContainer.append(rowEl);

  //dynamically create hour box and text area field - insert plannerTime to convert to desired time format
  hourEl = $(`<div class = "col-2 hour" id="${i}">${plannerTime(i)}</div>`)
  eventTextArea = $(`<textarea class="col-8 form-control textarea description" id="eventTextArea${i}"></textarea>`);
  // console.log(eventTextArea);
  $("textarea").focus(function () {
    $("textarea").css("color", "white");
  });

  //dynamically create Save Button add click listener to save events
  saveEventBtn = $(`<button class="col-2 saveBtn" id="saveBtn${i}">Save</button>`)
    //includes click function to collect data &  save textarea input to localStorage
    .click(function () {
      let time = $(this).siblings().attr("id");
      let value = $(this).siblings(".description").val();
      // console.log(time);
      // console.log("random");
      localStorage.setItem(time, value);
    });


  //append columns to the row container
  rowEl.append(hourEl, eventTextArea, saveEventBtn);
  // checkCurrentTime();
};

/*****    Check if  time slots === current time  ****/
// // //   create array with hours in it
// // //   in backgroud - loop through hours to test 
// // //     test at interval? every hour? minute? Second?

// // //   1) if equal, then bg: current: #BEF992
// // //   2) else if before bg: Past: #E8DFDF or #EAE9E9
// // //   3) else: if after bg: Future: 5FB9B0


//To see if current time matches the time and event is scheduled
function checkCurrentTime() {
  //define current time
  let currentTime = new Date().getHours();
  //confirm current time format
  console.log(currentTime);
/*************************************************************/
  // if the value of hourEl is ===  if value of hour.id >8







  
  //check each hour against current time
  for (var i = 8; i <= 18; i++) {
    console.log(i)
    if (currentTime == i) {
      console.log("happening Now");
      // $("eventTextArea${i}").css("background", "red");
      // $("#eventTextArea${i}").css("background-color", "#BEF992")
      // $("eventTextArea${i}").css("background", "#BEF992");
    } else if (currentTime > i) {
      console.log("already happened");
       $("#eventTextArea${i}").css("background-color", "#5FB9B0")
    }
    else {
      console.log("event coming up");
    }
  }
}
 checkCurrentTime();


//LOAD SAVED EVENTS  
let event8 = localStorage.getItem("8");
// console.log(event8);
$("#eventTextArea8").val(event8);

let event9 = localStorage.getItem("9");
// console.log(event9);
$("#eventTextArea9").val(event9);

let event10 = localStorage.getItem("10");
// console.log(event10);
$("#eventTextArea10").val(event10);

let event11 = localStorage.getItem("11");
// console.log(event11);
$("#eventTextArea11").val(event11);

let event12 = localStorage.getItem("12");
// console.log(event12);
$("#eventTextArea12").val(event12);

let event13 = localStorage.getItem("13");
// console.log(event13);
$("#eventTextArea13").val(event13);

let event14 = localStorage.getItem("14");
// console.log(event14);
$("#eventTextArea14").val(event14);

let event15 = localStorage.getItem("15");
// console.log(event15);
$("#eventTextArea15").val(event15);

let event16 = localStorage.getItem("16");
// console.log(event16);
$("#eventTextArea16").val(event16);

let event17 = localStorage.getItem("17");
// console.log(event17);
$("#eventTextArea17").val(event17);

let event18 = localStorage.getItem("18");
// console.log(event18);
$("#eventTextArea18").val(event18);

//load events for the first time
// loadEvents();
// add to an array or loop??
//  let events = []
// save events in array
// events.push ({
//   text: "test",
// });console.log(events);



// /****  STILL TO DO  *****/

// //COLOR CHANGE EVENT Backgrounds ****/
// //1) Compare hour at i with current time
// //2) set if within then
// //set if < and  > else if & else

// // var auditTask = function(taskEl) {
// //   // get date from task element
// //   var date = $(taskEl)
// //     .find("span")
// //     .text()
// //     .trim();

// //   // convert to moment object at 5:00pm
// //   var time = moment(date, "L").set("hour", 17);


// //let events = []

// //     // save in events in  array
// //    events.push({
// //       text: eventText 
// //       hour: eventTime  hourEL?? hourEL text??
// //     });

// //     saveEvents();
// //   }
// // });


// // // // 4) Check if  time slots === current time
// // // // map?

// // // //   create array with hours in it
// // // //   in backgroud - loop through hours to test 
// // // //     test at interval? every hour? minute? Second?


// // // //   1) if equal, then bg: current: #BEF992
// // // //   2) else if before bg: Past: #E8DFDF or #EAE9E9
// // // //   3) else: if after bg: Future: 5FB9B0


// // // // 5) 


// // // // // isToday(date: DateTime): boolean {
// // // // //   return date.toISODate() === DateTime.local().toISODate();
// // // // // }

// // // // // or someDateTimeInstance.hasSame(DateTime.local(), "day")



// // // // CSS: Dark Mode
// // // // body: #2B1F31 or #18131B or #2D2432
// // // // Text: #F3F8FA or ~ White or black
// // // // Past: #E8DFDF or #EAE9E9
// // // // current: #BEF992
// // // // Future: 5FB9B0
// // // // //*** */


// // // // // CODE:::::

// // // // // // //load doc, then run jquery
// // // // // $(function(){
// // // // //   // jQuery methods go here...







// // // // });


// // //***** on the verge functions:  ******/

// // // function hrDay() {
// // //   for (let i = "08:00:00"; i <= "10:00:00"; addHr()) {
// // //     let iForm = moment([i],"HH:mm:ss").format("LT");
// // //   console.log(iForm);
// // //   }

// // // function addHr() {
// // //   moment([i]).add(1, 'hour').format('hh:mm:ss');
// // // }
// // // } hrDay();
// // // console.log(hrDay);








/******     time  comparison for background color:  *****/
// if (time < hour){
//   console.log("event is past");
// } else if (time > hour) {
//   console.log("event is coming up");
// } else {
//   console.log("happening now")
// }



///****** NOT SURE IF NEEDED **** */


//did use this cuz need to insert a funciton for the text...
// let hourEl = $("<div>").addClass("col-2 hour").text("time holder");

// let vs nothing - because jquery shorthand?
//   // let rowEl = $("div").addClass("row");
//   // plannerContainer.append(rowEl);