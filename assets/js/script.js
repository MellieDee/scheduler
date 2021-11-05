
// /***    VARIABLES    ***/

// let plannerContainer = $(".container")

// let hourArray = [

// ];

 /** DISPLAY CURRENT DAY ***/
let currentDayEl = document.querySelector("#currentDay");
currentDayEl.textContent = (moment().format('MMMM Do YYYY, h:mm:ss a'));

console.log(moment().toDate());



/****    MANAGEMENT STARTS   ****/

/***   FUNCTIONS START   ****/

/**
 


2)create rows for day 11 8-6pm */


let hr8 = "08:00:00";
let hr8Form = moment(hr8,"HH:mm:ss").format("LT");
console.log(hr8Form);

let hr9 = "09:00:00";
let hr9Form = moment(hr9,"HH:mm:ss").format("LT");
console.log(hr9Form);

let hr10 = "10:00:00";
let hr10Form = moment(hr10,"HH:mm:ss").format("LT");
console.log(hr10Form);

let hr11 = "11:00:00";
let hr11Form = moment(hr11,"HH:mm:ss").format("LT");
console.log(hr11Form);

let hr12 = "12:00:00";
let hr12Form = moment(hr12,"HH:mm:ss").format("LT");
console.log(hr12Form);

let hr1 = "13:00:00";
let hr1Form = moment(hr1,"HH:mm:ss").format("LT");
console.log(hr1Form);

let hr2 = "14:00:00";
let hr2Form = moment(hr2,"HH:mm:ss").format("LT");
console.log(hr2Form);

let hr3 = "15:00:00";
let hr3Form = moment(hr3,"HH:mm:ss").format("LT");
console.log(hr3Form);

let hr4 = "16:00:00";
let hr4Form = moment(hr4,"HH:mm:ss").format("LT");
console.log(hr4Form);

let hr5 = "17:00:00";
let hr5Form = moment(hr5,"HH:mm:ss").format("LT");
console.log(hr5Form);

let hr6 = "18:00:00";
let hr6Form = moment(hr6,"HH:mm:ss").format("LT");
console.log(hr6Form);







//function to increase hours


// let workHours = array [
// { 
//   id: "0",
//   hour: hour[0]
// }

// {
//   id: id[i],
//   hour: hour[i]
// }
// ]

// ];
// let createPlanner = "";
// for (let i = 0; i < workHours.length; i++){
//   createPlanner()[i];
// };

// /***   CREATE HOUR LOG ROWS ****/
// function createPlanner () {
// let rowEl = $("div").addClass("row");
// plannerContainer.append(rowEl);

// let hourEl = $(`<div class="col-2 time-block hour">test</div>`);
// let eventArea = $(`<div class="col-8 description" id="[i]"></div>`);
// let saveBtn = $(`<button class="col-2 saveBtn">Save</button>`).click(function() {console.log("place holder for button action function");
// });

// rowEl.append(hourEl);
// rowEl.append(eventArea);
// rowEl.append(saveBtn);
// };
// // )


// // 3) create columns for rows (2?)
// //   A) create hour column:  
// //      put the time in the column
// //   B)create event form
// // // i) div to "hold" color
// //   ii) div to hold text area
// //   iii) save btn
// //       a)capture data from text area
// //       b) display on screen
// //       c) save to localStorage
// //   iv) Edit event 

// // 4) Check if  time slots === current time
// // map?

// //   create array with hours in it
// //   in backgroud - loop through hours to test 
// //     test at interval? every hour? minute? Second?


// //   1) if equal, then bg: current: #BEF992
// //   2) else if before bg: Past: #E8DFDF or #EAE9E9
// //   3) else: if after bg: Future: 5FB9B0


// // 5) 
  

// // // isToday(date: DateTime): boolean {
// // //   return date.toISODate() === DateTime.local().toISODate();
// // // }

// // // or someDateTimeInstance.hasSame(DateTime.local(), "day")



// // CSS: Dark Mode
// // body: #2B1F31 or #18131B or #2D2432
// // Text: #F3F8FA or ~ White or black
// // Past: #E8DFDF or #EAE9E9
// // current: #BEF992
// // Future: 5FB9B0
// // //*** */


// // // CODE:::::

// // // // //load doc, then run jquery
// // // $(function(){
// // //   // jQuery methods go here...







// // });


//***** on the verge functions:  ******/

// function hrDay() {
//   for (let i = "08:00:00"; i <= "10:00:00"; addHr()) {
//     let iForm = moment([i],"HH:mm:ss").format("LT");
//   console.log(iForm);
//   }

// function addHr() {
//   moment([i]).add(1, 'hour').format('hh:mm:ss');
// }
// } hrDay();
// console.log(hrDay);