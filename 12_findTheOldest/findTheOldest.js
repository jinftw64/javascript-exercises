const findTheOldest = function(people) {
  return people.reduce((oldestPerson, currentPerson) => {
    const ageOldestPerson = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
    const ageCurrentPerson = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    return ageOldestPerson < ageCurrentPerson ? currentPerson : oldestPerson;
  })
};

// Do not edit below this line
module.exports = findTheOldest;
