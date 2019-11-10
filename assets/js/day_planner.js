console.log("Day Planner");

/*
This is the day planner activity that will utilize jquery.

Plan your schedule for the day in one hour increments and store it in local storage.

*/

// interval is how many minutes it takes to get to the hour * 60 seconds
// interval_time = (60 minutes - current min hour) * 60 * 1000
// Example: If the current time is 5:12 pm, the minute returned is 12.  60 -12 = how many minutes are left until the top of the hour is reached.  48 min * 60 sec will return how many seconds it will take.  Then change it to milliseconds by multiplying by 1000

// Declare variables

let schedule = JSON.parse(localStorage.getItem("schedule"));
let current_time = moment();
let current_hour = moment().hour();
let description;
let btn;
let hour= "hour";
let interval = (60 - moment().minute()) * 60 * 1000

console.log(current_time.format("MMM DD YYYY hh:mm A"));
console.log(interval)

// save description to schedule and localStorage
$(".saveBtn").click(function(){
    event.preventDefault()
    console.log("Save Button Clicked " + this.id)
    console.log(this)
    console.log(this.previousElementSibling)
    console.log(this.previousElementSibling.firstElementChild)
    console.log()

    schedule_hour = $(this).attr(hour)
    description = $(this.previousElementSibling.firstElementChild).val()
    schedule[schedule_hour] = description;

    console.log(hour)
    console.log(description)
    console.log(schedule)

    localStorage.setItem("schedule", JSON.stringify(schedule))
    $(this).text("Saved")
})

// display saved schedule
$(document).ready(function (){
    console.log("page loaded")
    // The schedule holds the hour and it's corresponding description
    if (schedule === null){
        schedule = {
            hour9: "",
            hour10: "",
            hour11: "",
            hour12: "",
            hour13: "",
            hour14: "",
            hour15: "",
            hour16: "",
            hour17: "",

            }
    } else {
        // Add descriptions to daily planner
        $(".textarea").each(function() {
            schedule_hour = $(this).attr(hour)
            $(this).val(schedule[schedule_hour])
            console.log($(this).val())
        });
    }
    updateDescriptionColors()
})

//
$(".description").click(function(){
    console.log("Someone changed a textarea")
    $(this).next().text("Save")
    console.log($(this).next().text())
})

function timer(){
    let timer_interval = setInterval(function(){
        updateDescriptionColors()

        // clear interval when j=17.  All times are in the past until opened the next day.
        if (j == 17){
            clearInterval()
            interval = (60 - moment().minute()) * 60 * 1000
        }
    }, interval)
}

function updateDescriptionColors(){
    $(".description").removeClass("past");
    $(".description").removeClass("present");
    $(".description").removeClass("future");

    j = moment().hour();

    // add past class to hours < j
    let below;
    for (below=9; below < j; below++){
        id = "#description-" + below;
        $(id).addClass("past");
    }

    // add present class to hour = j
    id = "#description-" + j
    $(id).addClass("present");
    let above;
    for(above=17; j < above; above--){
        id = "#description-" + above;
        $(id).addClass("future");
    }
}


timer()
