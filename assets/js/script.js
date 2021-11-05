
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




// });
// function saveEvents() {
//   // save button in was clicked
//   $("saveBtn").click(function () {
//     // let eventText = $("textarea").val();
//     console.log("this button was clicked");
//   });
// };
// saveEvents();


// function saveEventData() {
//   $("saveBtn").click(function () {
//     // get textArea values
//     console.log($("textarea").val());
//   });
// };
// plannerTime();


//  let events = []

// //save events in array
// events.push ({
//   text: "test",
// });console.log(events);

/***   CREATE ELEMENTS THAT MAKE THE PLANNER ROWS ****/
let rowEl = "";

for (var i = 8.00; i <= 18.00; i++) {
  console.log(i)

  //create planner rows & append to the main div container: create the planner time, entry and save columns
  rowEl = $(`<div class="row"></div>`);
  plannerContainer.append(rowEl);

  hourEl = $(`<div class = "col-2 hour">${plannerTime(i)}</div>`)
  eventTextArea = $(`<textarea class="col-8 form-control textarea description bg-transparent" id="eventTextArea${i}"></textarea>`);
  console.log(eventTextArea);
  $("textarea").focus(function () {
    $("textarea").css("color", "white");
  });

  saveEventBtn = $(`<button class="col-2 saveBtn" id="saveBtn${i}">Save</button>`).click(function () { console.log("place holder for button action function") });


  //append columns to the row container
  rowEl.append(hourEl, eventTextArea, saveEventBtn);
  // checkCurrentTime();
}

// $("saveEventBtn").click(function () {
//   console.log("place holder for button action function")
//  }); 
// createPlanner();





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
  let hour = new Date().getHours();
  //confirm current time format
  console.log(hour);

  //check each hour against current time
  for (var x = 8; x <= 18; x++) {
    console.log(x)
    if (hour == x) {
      console.log("happening Now");
      // $("eventTextArea${i}").css("background", "#BEF992");
    } else if (hour > x) {
      console.log("already happened");

    }
    else {
      console.log("event coming up");
    }
  }
}
// checkCurrentTime();

/****  STILL TO DO  *****/

//SAVE DATA:
// 1) capture data to save to local storage need to associate array id and hour
// 2) save to localStorage
//3) recall from localStorage

//COLOR CHANGE EVENT Backgrounds ****/
//1) Compare hour at i with current time
//2) set if within then
//set if < and  > else if & else

// var auditTask = function(taskEl) {
//   // get date from task element
//   var date = $(taskEl)
//     .find("span")
//     .text()
//     .trim();

//   // convert to moment object at 5:00pm
//   var time = moment(date, "L").set("hour", 17);

//   // remove any old classes from element
//   $(taskEl).removeClass("list-group-item-warning list-group-item-danger");

//   // apply new class if task is near/over due date
//   if (moment().isAfter(time)) {
//     $(taskEl).addClass("list-group-item-danger");
//   } else if (Math.abs(moment().diff(time, "days")) <= 2) {
//     $(taskEl).addClass("list-group-item-warning");
//   }
// };


//let events = []


//     // save in events in  array
//    events.push({
//       text: eventText 
//       hour: eventTime  hourEL?? hourEL text??
//     });

//     saveEvents();
//   }
// });

// var saveEvents = function() {
//   localStorage.setItem("events", JSON.stringify(events));
// };

// // load events for the first time
// loadEvents();

// // //   iv) Edit event 

// // // 4) Check if  time slots === current time
// // // map?

// // //   create array with hours in it
// // //   in backgroud - loop through hours to test 
// // //     test at interval? every hour? minute? Second?


// // //   1) if equal, then bg: current: #BEF992
// // //   2) else if before bg: Past: #E8DFDF or #EAE9E9
// // //   3) else: if after bg: Future: 5FB9B0


// // // 5) 


// // // // isToday(date: DateTime): boolean {
// // // //   return date.toISODate() === DateTime.local().toISODate();
// // // // }

// // // // or someDateTimeInstance.hasSame(DateTime.local(), "day")



// // // CSS: Dark Mode
// // // body: #2B1F31 or #18131B or #2D2432
// // // Text: #F3F8FA or ~ White or black
// // // Past: #E8DFDF or #EAE9E9
// // // current: #BEF992
// // // Future: 5FB9B0
// // // //*** */


// // // // CODE:::::

// // // // // //load doc, then run jquery
// // // // $(function(){
// // // //   // jQuery methods go here...







// // // });


// //***** on the verge functions:  ******/

// // function hrDay() {
// //   for (let i = "08:00:00"; i <= "10:00:00"; addHr()) {
// //     let iForm = moment([i],"HH:mm:ss").format("LT");
// //   console.log(iForm);
// //   }

// // function addHr() {
// //   moment([i]).add(1, 'hour').format('hh:mm:ss');
// // }
// // } hrDay();
// // console.log(hrDay);








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