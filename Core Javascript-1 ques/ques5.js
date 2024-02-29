function login(username, password){
    if(username == "admin" && password == "12345"){
        return "Login Successful";
    }
    else return "Invalid Credentials";
}

console.log(login("admin","12345"));
console.log(login("adnaf","fjg43"));