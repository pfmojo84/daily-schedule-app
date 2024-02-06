let dateDisplayEl = $('#currentDay');

function displayDate() {
  let currentDate = dayjs().format('dddd MMM DD, YYYY');
  dateDisplayEl.text(currentDate);
};

//define currentHour using dayjs
dayjs().hour()
let currentHour = dayjs().hour();
//console.log(currentHour);


//To Do - create conditional statement to check each div and to see if static time is >('past'), = ('present'), or <('future')
//First, removed 'time block' class that was pre-loaded with source code. use jQuery to format each text area using 
//'time block' as element class selector.
$(".time-block").each(function(){

//use $(this) to select all '.time-block' from DOM, pull the id attibute data, create an array for each dataset, 
//remove the seperator and pull the data indexed at '1' in the respective array
  let timeSlot = $(this).attr("id").split("-")[1]; //["hour", "9"] 
//console.log(timeSlot); 
  let timeKey = $(this).attr("id")
//Pull saved data from local storage and display in appropriate timeSlot
  let textEntry = localStorage.getItem(timeKey);
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


$(".saveBtn").on("click", function(){
  var divKey = $(this).parent().attr("id")
  var textValue = $(this).siblings(".description").val()

  localStorage.setItem(divKey,textValue)
});

displayDate();




