const accountId = 12345
let accountEmail = "anus@gmail.com"
var accountPassword = "12345678"
accountCity = "karachi"
let accountState;

//const not change

accountEmail = "sidique@gmail.com"
accountPassword = "121212"
accountCity = "Lahore"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log (accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

