// Question 1: Value Detective

function describeValue(value) {
    let type = typeof value;
    let truth = value ? "truthy" : "falsy";

    return type + " | " + truth;
}



// Question 2: Bangladesh Weekend Machine

function getDayType(day) {
    switch (day.toLowerCase()) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

console.log(getDayType("Friday"));

console.log(getDayType("friday"));

console.log(getDayType("MONDAY"));

console.log(getDayType("Bandarban"));
