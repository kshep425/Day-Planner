console.log("Day Planner");

/*
This is the day planner activity that will utilize jquery.

Plan your schedule for the day in one hour increments and store it in local storage.

*/

// Declare variables

let schedule = localStorage.getItem("schedule");
let current_time = moment();
let current_hour = moment().hour();
let description;

console.log(current_time.format("MMM DD YYYY hh:mm A"));
console.log(current_hour)

// The schedule holds the hour and it's corresponding description
if (schedule === null){
    schedule = [
        {hour9: ""},
        {hour10: ""},
        {hour11: ""},
        {hour12: ""},
        {hour13: ""},
        {hour14: ""},
        {hour15: ""},
        {hour16: ""},
        {hour17: ""},

    ]
}

// save description to schedule
