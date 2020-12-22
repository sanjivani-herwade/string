let name = 'Andrew Mead'

//length property
console.log(name.length)

//convert to upper case
console.log(name.toUpperCase())

//convert to lower case
console.log(name.toLowerCase())

//Includes method
let password = 'Sanbi20@89'
console.log(password.includes(password))


//challenge area

//isvalidPassword
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('abcdef'))
console.log(isValidPassword('abc1@#$%^'))
console.log(isValidPassword('abcpassjpassword'))


