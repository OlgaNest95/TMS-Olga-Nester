function Car (name,model,year,color,maxSpeed,fuelCapacity=60,fuelConsumption=10) {
    this.name=name,
    this.model=model,
    this.year=year,
    this.color=color,
    this.maxSpeed=maxSpeed,
    this.fuelCapacity=fuelCapacity ,
    this.fuelConsumption=fuelConsumption
  }
  Car.prototype.getFullName= function(){
      return alert(`${this.name} ${this.model}`)
  }
  Car.prototype.getAge=function () {
      let today = new Date();
      let age = today.getFullYear()-this.year
      alert(`${age}`)
      return  age
  }
  Car.prototype.changeColor=function(color){
      if(this.color===color){
        alert (`This car already has ${color} color` )
      } else {
        alert (`We changed ${this.color} color for ${color}`)
        this.color=color
      }
  }
  Car.prototype.calculateWay=function(kilometers,fuel){
      if (fuel<10){
        alert (`You will need to refuel, as there is only ${fuel} liters in the tank of the car`)
      }
      let time = kilometers/this.maxSpeed
      alert (`You will need ${Math.floor(time)} h and ${((time-Math.floor(time))*60).toFixed(0)} min to travel ${kilometers} km distance`)
  
      let requiredAmountOfFuel = kilometers/this.fuelConsumption
      alert (`You will need to refuel ${(requiredAmountOfFuel/this.fuelCapacity).toFixed(0)} times`)
    }
  
  let car1 = new Car('Kia Motors','X6',2012,'red',220)
  console.log(car1)
  car1.getFullName()
  car1.getAge()
  car1.changeColor('green')
  car1.calculateWay(1200,5)
  
  function Lexus (...args){
  this.climateControl=true
  Car.apply(this,args)
  }
  Lexus.prototype=Object.create(Car.prototype)
  Lexus.prototype.constructor=Lexus
  Lexus.prototype.getTechnicalInspection=function(age){
  if (age>2){
    alert(`You need to pass a technical inspection.`)
  }else{
    alert (`You do not need to pass a technical inspection.`)
  }  }
  
  let Lexus1 = new Lexus('Lexus','ux',2015,'grey',280)
  console.log(Lexus1)
  Lexus1.getFullName()
  Lexus1.getAge()
  Lexus1.changeColor('green')
  Lexus1.calculateWay(1350,5)
  Lexus1.getTechnicalInspection(Lexus1.getAge())
  
  
  function Lamborghini (...args){
    this.class="lux"
    Car.apply(this,args)
  }
  Lamborghini.prototype=Object.create(Car.prototype)
  Lamborghini.prototype.constructor=Lamborghini
  Lamborghini.prototype.checkNewOrNot=function(mileage){
      if(mileage=0){
        alert (`New car`)
      }else(alert(`Used car`))
      }
    
  let Lamborghini1 = new Lamborghini('Lamborghini','urus',2020,'yellow',270)
  console.log(Lamborghini1)
  Lamborghini1.getFullName()
  Lamborghini1.getAge()
  Lamborghini1.changeColor('green')
  Lamborghini1.calculateWay(1350,5)
  Lamborghini1.checkNewOrNot(20)
  
  function BMW(...args){
    this.sunroof=true
    Car.apply(this,args)
      }
    BMW.prototype=Object.create(Car.prototype)
    BMW.prototype.constructor=BMW
    BMW.prototype.checkYourChoice=function(nameOfCarWhichYouWantToBuy){
        if (this.name===nameOfCarWhichYouWantToBuy){
          alert(`Congratulations, you made the right choice !!!`)
        } else {
          alert(`Think again!`)
        }
      }
    let BMW1 = new BMW('BMW','X6',2019,'grey',270)
    console.log(BMW1)
    BMW1.getFullName()
    BMW1.getAge()
    BMW1.changeColor('green')
    BMW1.calculateWay(100,5)
    BMW1.checkYourChoice('BMW')
    BMW1.checkYourChoice('Lamborghini')  