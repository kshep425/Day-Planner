console.log("Day Planner");

/*
This is the day planner activity that will utilize jquery.

Plan your schedule for the day in one hour increments and store it in local storage.

*/

// Declare variables

let schedule = JSON.parse(localStorage.getItem("schedule"));
let current_time = moment();
let current_hour = moment().hour();
let description;
let btn;
let hour= "hour";
console.log(current_time.format("MMM DD YYYY hh:mm A"));
console.log(current_hour)



// save description to schedule
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
        console.log($(".textarea"))
        //let descriptions = $(".description")
        $(".textarea").each(function() {
            console.log(this)
            schedule_hour = $(this).attr(hour)
            console.log(schedule_hour)
            console.log(schedule[schedule_hour])
            $(this).val(schedule[schedule_hour])
            console.log($(this).val())
        });
        //;
    }
})

//
$(".description").click(function(){
    console.log("Someone changed a textarea")
    console.log(this)
    console.log($(this).next())
    console.log($(this).next().text())
    $(this).next().text("Save")
    console.log($(this).next().text())
})


function updateDescriptionColors(){
    let timer_interval = setInterval(function(){
        console.log(moment().hour())
        if (moment().hour() < 9) {
            $(".description").removeClass("present")
            $(".description").removeClass("past")
            $(".description").addClass("future")
        } else if (moment().hour > 17){
            $(".description").addClass("past")
            $(".description").removeClass("present")
            $(".description").removeClass("future")
        };

    }, 1000)
}

updateDescriptionColors()