
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

  //***CREATE ROW: create planner rows & append to the main div container: create the planner time, entry and save columns
  rowEl = $(`<div class="row"></div>`);
  plannerContainer.append(rowEl);

  //***HOUR DIV & TEXTAREA: dynamically create hour box and text area field - insert plannerTime to convert to desired time format
  hourEl = $(`<div class = "col-3 hour" id="${i}">${plannerTime(i)}</div>`)
  eventTextArea = $(`<textarea class="col-6 form-control textarea description" id="eventTextArea${i}"></textarea>`);
  // console.log(eventTextArea);
  $("textarea").focus(function () {
    $("textarea").css("color", "black");
  });

  //*** SAVE BUTTON: dynamically create Save Button add click listener to save events
  saveEventBtn = $(`<button class="col-3 saveBtn material-icons" id="saveBtn${i}"><span class="material-icons-outlined">
  save
  </span></button>`)
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


//To see if current time matches the time and event is scheduled
function checkCurrentTime() {
  //define current time
  let currentTime = new Date().getHours();
  //confirm current time format
  console.log(currentTime);

  /*****    Check if  time slots === current time  ****/
  //check each hour against current time with for loop
  for (var i = 8; i <= 18; i++) {
    console.log(i)
    if (currentTime == i) {
      //1) if event is happening now bg is bright light green
      console.log("happening Now");
      $(`#eventTextArea${i}`).css("background-color", "#BEF992");
    } else if (currentTime > i) {
      //2) if event is in the past bg is grey
      console.log("already happened");
      $(`#eventTextArea${i}`).css("background-color", "#b5b1b1");
    }
    else {
      //3) else: if after the current time bg is teal
      console.log("event coming up");
      $(`#eventTextArea${i}`).css("background-color", "#5FB9B0");
    };
  };
};
checkCurrentTime();


//LOAD SAVED EVENTS  
for (var i = 8; i <= 18; i++) {
  let event = localStorage.getItem(i);
  console.log(event);
  $(`#eventTextArea${i}`).val(event);
};


// // //let events = []

// // //     // save in events in  array
// // //    events.push({
// // //       text: eventText 
// // //       hour: eventTime  hourEL?? hourEL text??
// // //     });

// // //     saveEvents();
// // //   }
// // // });
