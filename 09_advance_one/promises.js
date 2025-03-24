const promiseOne = new Promise(function(resolve , reject){
    // Do an Async Task
    // DB calls , cryptography , network calls
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    } , 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})

new Promise(function(resolve , reject){
    setTimeout(()=>{
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2 resolved');
    
})


const promiseThree = new Promise(function(resolve , reject){
    setTimeout(()=>{
        resolve({username: "Vish" , email:"vishal@example.com"})
    },1000)
})


promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:'vishal' , password:"123"})
        }else{
            reject('Error Occured')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
    
})
.then((username)=>{
    console.log(username);

})
.catch(function(error){
    console.log(error);
    
}).finally(()=> console.log('The promise is either rejected or resolved') )



promiseFive = new Promise(function(resolve, reject){
    setTimeout(()=>{
                let error = true
                if(!error){
                    resolve({username:'JavaScript' , password:"123"})
                }else{
                    reject('Error: JS went wrong')
                }
            },1000)
});

async function consumePromiseFive(){
    try{
        const result = await promiseFive;
    console.log(result);
    
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()


async function getAllUsers(){
    try{
        const response = await fetch('https://api.github.com/users/vishallyours')
        // console.log(response);
        
        const data = await response.json()
        console.log(data);
    
    }catch (error) {
        console.log("E:", error);
    }
}
getAllUsers()

fetch('https://api.github.com/users/vishallyours')
.then((response)=>{
    return response.json() 
})
.then((data)=>{
    console.log(data);    
})
.catch((error)=> console.log("E:" , error))


