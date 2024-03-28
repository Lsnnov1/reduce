const nums = [2, 4, 6, 8]

// let total = 0;
// for (let n of nums){
//     total += n;
// }
// console.log(total)



// has two paramaters:
//  accumulator stores previous execution return value,
//  currentvalue stores the current value when looped.
nums.reduce(function(accumulator, currentvalue) {
    // for every value in given array, return the previous,  "accumulated value" + the current index value of the array.
    return accumulator + currentvalue;
// passing in zero as starting accumulator (previous value) because there is no previous value when starting.
}, 0)


// MINIMUM / MAXIMUM
nums.reduce(function(accumulator, currentvalue){
    if (currentvalue > accumulator){
        return currentvalue;
    } 
    else return accumulator;
})

const people = [
    {name:"cash",  age: 15 },
    {name:"jmin",  age: 16 },
    {name:"allsios",  age: 15 },
    {name:"vergeuensa",  age: 17 },
    {name:"nygwen",  age: 15 },
    {name:"smith",  age: 17}
]
// PEOPLEAGES (ACCUMULATOR) CURRENTPERSON (CURRENTVALUE)
people.reduce(function(peopleAges, currentPerson){
    // gets the value (peopleage) of each key (currentperson)
    const age = currentPerson.peopleAges;
    if (peopleAges[age] == null){
        peopleAges[age] = 1;
    } else {peopleAges[age += 1]
    }return peopleAges

}, {})