let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}
let otherAccount = myAccount
otherAccount.income = 2000
let addExpense = function (account,amount) {
    account.expense = account.expense + amount
}

addExpense(myAccount, 3.50)
console.log(myAccount)