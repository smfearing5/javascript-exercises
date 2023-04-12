const findTheOldest = function(people) {
    let output;
    let highestAge = 0;
    let age = 0;

    // for each person in people...
    people.forEach(person => {
        // get current year if person is still alive
        if (!("yearOfDeath" in person)) {
            person.yearOfDeath = new Date().getFullYear();
        }

        // check if person has highest age
        age = person.yearOfDeath - person.yearOfBirth
        if (age > highestAge) {
            highestAge = age;
            output = person;
        }
    })

    return output;
};

// Do not edit below this line
module.exports = findTheOldest;
