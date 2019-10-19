class Car{

    constructor(wheels,color,brand){
        this.wheels = wheels
        this.color = color
        this.brand = brand
        this.speed = 0
        this.speed_Down = 0
        this.speed_Limit = 180
    }

    getInformation(){
        return `wheels: ${this.wheels} color: ${this.color} brand: ${this.brand}`
    }

    speedUP(){ 

        if(this.speed < this.speed_Limit){
        this.speed +=10
        }
        return `the speed is now ${this.speed}`
       
    }

    speedDown(){
        if(this.speed<=0){
            return `the speed is now ${this.speed}`   
        }
        else{
        this.speed -=10
        return `the speed is now ${this.speed}`
        }
        
    }
    


}

let ferrari = new Car(4,"red","Ferrari")
//let truck = new Car(6,"pink","Truck")

console.log(ferrari.getInformation())
//console.log(truck.getInformation())

var i = 0

while (i<10){
console.log(ferrari.speedUP())
i++
}

var i = 0

while (i<20){
console.log(ferrari.speedDown())
i++
}


