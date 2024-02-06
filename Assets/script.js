let dateDisplayEl = $('#currentDay');

function displayDate() {
  let currentDate = dayjs().format('dddd MMM DD, YYYY');
  dateDisplayEl.text(currentDate);
};

//define currentHour using dayjs
dayjs().hour()
let currentHour = dayjs().hour();
console.log(currentHour);


//To Do - create conditional statement to check each div and to see if static time is >('past'), = ('present'), or <('future')
//First, removed 'time block' class that was pre-loaded with source code. use jQuery to format each text area using 
//'time block' as element class selector.
$(".time-block").each(function(){

//use $(this) to select all '.time-block' from DOM, pull the id attibute data, create an array for each dataset, 
//remove the seperator and pull the data indexed at '1' in the respective array
  let timeSlot = $(this).attr("id").split("-")[1];
console.log(timeSlot); 

//Pull saved data from local storage and display in appropriate timeSlot
  let textEntry = localStorage.getItem(timeSlot);
  let textArea = $(this).find(".description");
  textArea.val(textEntry);
//console.log(textArea);

  if (timeSlot < currentHour){
    $(this).find(".description").addClass("past");
  } else if (timeSlot == currentHour) {
    $(this).find(".description").addClass("present");
  } else {
    $(this).find(".description").addClass("future");
  }
});





displayDate();









// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
