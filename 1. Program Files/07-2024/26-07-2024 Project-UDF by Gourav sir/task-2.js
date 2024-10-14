// Q-2. Write a function calculateSimpleInterest(principal, rate, time) that calculates and returns the simple interest based on the principal amount, interest rate, and time period.

let principal = 1000
let rate = 5
let time = 2
calculate(principal, rate, time)
function calculate(principal, rate, time) {
    let simpleInterest = (principal * rate * time) / 100
    console.log(`The simple interest is: ${simpleInterest}`)
}