//Calculate boda fare
const Basefare = 50 //per ride in ksh
const Fare = 15 //per km in ksh
//User is prompted
let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
let distance = Number(input);
//Fare calculation function
function calculateFare(distance) {
    console.log("Calculating fare for distance: " + distance + " km");
    //Check if distance is a number
    if (typeof distance !== 'number') {
        console.error("Distance must be a number");
        return;
    }
    //Check if distance is greater than 0
    if (distance <= 0) {
        console.error("Distance must be greater than 0");
        return;
    }
    //Calculate total fare
    let totalFare = Basefare + (Fare * distance);
    console.log(`Uko kwote? Io ni ${distance} km:`);
    console.log(`Ukikalia Pikipiki: ${Basefare} Ksh`);
    console.log(`Mpaka Uko: ${Fare * distance} Ksh`);
    console.log(`Total: ${totalFare} Ksh`);
    console.log(`Panda Pikipiki!`);
}
calculateFare(distance);