class Person {

    constructor(name="Anonymous",age=0){
        this.name=name
        this.age=age
    }
    getGretting(){
        return `Hi. I am ${this.name}`
    }
    getDescription(){
        return`${this.name} is ${this.age} year(s) old`
    }
}

class Student extends Person{
    constructor(name,age,major){
    super(name,age)
    this.major=major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){

        let descripton = super.getDescription()
        if(this.major){
            descripton+=` their major is ${this.major}`
            return descripton
        }
    }
}


class Traveler extends Person{
    constructor(name,age,travle){
        super(name,age)
        this.travle = travle
    }
    getGretting(){
        let Gretting=super.getGretting()

        if(this.travle){
            Gretting+=` Im visiting from ${this.travle}.`
        }
        return Gretting

    }
}

const me= new Traveler("Khaled",20,"Turkye")
console.log(me.getGretting())

const other = new Traveler()
console.log(other.getGretting())