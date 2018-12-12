/*
This playground is just playing around with random codes, doing random exercises and testing different codes
*/

///////////// callback functions //////////////
console.log(" ///////////// begining of 1st test code - callback functions ////////////// ")

// simulate a data base
let superhero = [{
        id: 1,
        name: 'Spiderman'
    },
    {
        id: 2,
        name: 'Flash'
    },
    {
        id: 3,
        name: 'Thor'
    }
];

//DB table with object of {id|salary}
let superpowers = [{
        id: 1,
        power: 'Spidey Sense'
    },
    {
        id: 2,
        power: 'Super Speed'
    }
];

let getSuperpower = (hero, anotherFunction) => {

    let thePower = superpowers.find((power) => { return power.id === hero.id; });
    if (!thePower) {
        return (anotherFunction(`The super hero ${hero.name} doesn't have super power assigned yet`));
    }



};

let getSuperhero = (id, someFunction) => {

    let theHero = superhero.find((aHero) => { return aHero.id === id });

    if (!theHero) {
        return someFunction(`There is no hero associated to id: ${id}`);
    }

    return someFunction(null, { id: theHero.id, name: theHero.name });

};

console.log(" ///////////// ending of 1st test code -  callback functions ////////////// ")