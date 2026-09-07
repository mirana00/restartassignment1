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


// Question 3: Username Gatekeeper

function validateUsername(username){
    if(username.length< 4) {
        return "Too Short";
    }

    if(username.includes(" ")){
        return "No Space Allowed";
    }

    if(username.toLowerCase().includes("admin")){
        return "Reserved Word";
    }

    return "Available";
}


