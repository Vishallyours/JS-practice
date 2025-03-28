function mulby5(num){
    
    return num*5
}

mulby5.power = 2

console.log(mulby5(5));
console.log(mulby5.prototype);
console.log(mulby5.power);


function creatUser (username, age){
    this.username = username
    this.age = age
}

creatUser.prototype.increment = function(){
    this.age++
}

creatUser.prototype.printMe = function(){
    console.log(`age is ${this.age}`);
    
}

const vish = new creatUser("vishal", 22)
const rupa = new creatUser("rupesh", 26)

vish.printMe()
rupa.increment()
rupa.printMe()

/*notes 
javascript gives construction function through "new" keyword
*/