function SetUserName(username){
    this.username = username
    console.log("called");
    
}

function createUser(username,email,password){
//    SetUserName(username) this function is not called this is only reference

    SetUserName.call(this, username)
    
    this.email = email
    this.password = password
}

const shiv = new createUser("shiv" , "shiv@gmail.com" , "12345")


console.log(shiv);