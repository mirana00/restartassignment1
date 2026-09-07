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


// Question 4: Dhaka CNG Fare Meter

function getCngFare(distance, isNight= false, waitingMinutes= 0){
    let fare = 50;

    if(distance> 2){
        fare = fare + (distance - 2)* 15;
    }
    fare = fare + waitingMinutes* 2;

    if(isNight){
        fare = fare * 1.20;
    }

    return fare;
}

console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));
