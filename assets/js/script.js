
// // // /***    VARIABLES    ***/
plannerContainer = $(".container")



// //  /** DISPLAY CURRENT DAY & Time ***/
let currentDayEl = document.querySelector("#currentDay");
currentDayEl.textContent = (moment().format('MMMM Do YYYY, h:mm A'));
console.log(moment().toDate());


// /***   FUNCTIONS START   ****/
function plannerTime() {
 time = moment([i], ["HH"]).format("LT");
  console.log(time);
  return time
 };

// plannerTime();



//get value of textarea
//function eventInput() {

// convert to time after?


// 2)create rows for day 11 8-6pm */
// want to compare if hours 8-6p are equal or greater

//turn  this into a F to call when comparing??




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
  eventTextArea = $("<textarea>").addClass("col-8 form-control textarea description bg-transparent");
  $("textarea").focus(function() {
    $("textarea").css("color", "white"); 
  });
  saveBtn = $(`<button class="col-2 saveBtn">Save</button>`).click(function () { console.log("place holder for button action function"); });

    //append columns to the row container
    rowEl.append(hourEl, eventTextArea, saveBtn);
  //append the textarea to the form 
  // eventForm.append(eventTextArea);


};

// createPlanner();

//need to capture data to save to local storage need to associate array id and hour
//need to display row on screen/page


//****   capture event data *****//
// function envverEvent() {
// $(".textarea").trigger("focus");
// }

/***pseudo code continued  ***/
// // // 3) create columns for rows (2?)
// // //   A) create hour column:  
// // //      put the time in the column
// // //   B)create event form
// // // // i) div to "hold" color
// // //   ii) div to hold text area
// // //   iii) save btn
// // //       a)capture data from text area
// // //       b) display on screen


// // //       c) save to localStorage


//let events = []

// save button in was clicked
// $(".saveBtn").click(function() {
//   // get form values
//   var eventText = $("eventP text").val();
//   var eventDate = $(TBD?).val();

//   if (eventP.text.val()  {
//     createEvent(eventText, hourEl.val??);


//     // save in events in  array
//    events.push({
//       text: eventText,or eventP??
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

// let hour = new Date().getHours();
//did use this cuz need to insert a funciton for the text...
// let hourEl = $("<div>").addClass("col-2 hour").text("time holder");

// let vs nothing - because jquery shorthand?
//   // let rowEl = $("div").addClass("row");
//   // plannerContainer.append(rowEl);

