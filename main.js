function add(a, b) {
    return a + b
}
console.log(add(3,4))


/*********************************/



function greet() {
    let name = prompt(`Please enter yor name`)
    alert (`Welcome to our club Sir/Miss ${name}`)
}

function isAnAdult() {
    let age = Number(prompt(`Please enter yor age`))
    if(age < 18) {
        alert(` Please come back in ${18 - age} years young boy/girl`)}
    else
        alert (`Welcome old man/woman`)
    return true
}

function admit() {
    greet()
    isAnAdult()

}

admit()


/*********************************/



function isEven() {
    const numberIn = Number(prompt(`Please enter a number :`))
    return numberIn % 2 === 0;

}

console.log(isEven());
