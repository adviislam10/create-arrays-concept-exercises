// Question 1
numArray = [1, 3, 5, 7, 9];
// console.log(myArray)


// Question 2
let names = "Azra-Betty-Caleb-Deena-Ezra-Fae";
let namesArray = names.split("-");
// console.log(namesArray);


// Question 3
let algArray = [];
for (let i = 0; i < 400; i++) {
    algArray.push("algorithm");
}
// console.log(algArray)


// Question 4
let multArray = []
for (let i = 20; i <= 800; i++) {
    if (i % 4 == 0) {
        multArray.push(i)
    }
}
// console.log(multArray)


// Question 5
Math.randomDec = function (low, high) {
    // Return a random decimal between low (inclusive) and high (exclusive)
    return Math.random() * (high - low) + low;
}

function createRandomArray(n, low, high) {
    let randomArray = []

    for (let i = 0; i < n; i++) {
        randomArray.push(Math.randomDec(low, high))
    }
    return randomArray
}

let sampleData = createRandomArray(100, 20, 60);
// sampleData should store 100 random decimals between 20 and 60


let randomHeights = createRandomArray(12, 4, 7);
// randomHeights should store 12 random decimals between 4 and 7