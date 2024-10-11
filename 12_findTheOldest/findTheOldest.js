const findTheOldest = function(people) {
    let oldest = people[0];
    for (let i = 1; i < people.length; i++) {
        if (!oldest.yearOfDeath) oldest.yearOfDeath = new Date().getFullYear();
        if (people[i].yearOfDeath - people[i].yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) oldest = people[i];
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
