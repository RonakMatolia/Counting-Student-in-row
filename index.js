//document.getElementById("count-el").innerText = 5


// cmd+k+c
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)




// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

// let myAge=19
// let humanDogRatio=7
// let myDogAge= myAge* humanDogRatio
// console.log(myDogAge)

let count=0
let countEl= document.getElementById("count-el") 
let saveEl = document.getElementById("save-el")
function increment() {
    console.log("button was click")
    count = count +1 
    countEl.textContent= count
}
function Save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count=0
    countEl.textContent=0
}